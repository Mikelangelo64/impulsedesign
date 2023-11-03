import * as THREE from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import vertexPars from '@/glsl/blob/vertex_pars.glsl';
import vertexMain from '@/glsl/blob/vertex_main.glsl';
import fragmentMain from '@/glsl/blob/fragment_main.glsl';
import fragmentPars from '@/glsl/blob/fragment_pars.glsl';
import { lerp } from '../config/lerp';
import path from '@/assets/models/model-1.glb';
import vevet from '../config/vevet';

interface IMaterialSettings {
  shininess: number;
  color: number | string;
  specular: number | string;
  emissive: number | string;
}

export default class BlobGLTF {
  private _index: number;

  private _path: string;

  private _action: {
    domArray: HTMLElement[];
    isHover: boolean;
    isChangeGeometry: boolean;
  };

  private _start: number;

  private _scene: THREE.Scene;

  private _position: THREE.Vector2;

  private _size: THREE.Vector2;

  get size() {
    return this._size;
  }

  private _sizeGeometry: THREE.Vector3;

  get sizeGeometry() {
    return this._sizeGeometry;
  }

  private _model: THREE.Group | undefined;

  private _mesh: THREE.Mesh | undefined;

  private _uniforms: THREE.Shader['uniforms'] | undefined;

  get uniforms() {
    return this._uniforms;
  }

  private _parent: THREE.Object3D;

  constructor(
    scene: THREE.Scene,
    index: number,
    actionDomArray: HTMLElement[],
    parent: THREE.Object3D
  ) {
    this._path = path;
    this._action = {
      domArray: actionDomArray,
      isHover: false,
      isChangeGeometry: false
    };
    this._parent = parent;
    this._index = index;
    this._start = Date.now();
    this._scene = scene;

    this._position = new THREE.Vector2(0, 0);
    this._size = new THREE.Vector2(0, 0);
    this._sizeGeometry = new THREE.Vector3(1, 1, 1);

    this._getDimensions();
    this._createMesh();
  }

  private _getDimensions() {
    let domElement: HTMLElement | undefined;

    if (vevet.viewport.isPhone && window.innerWidth <= 600) {
      domElement = this._action.domArray.find((item) =>
        item.classList.contains('mobile')
      );
    } else {
      domElement = this._action.domArray.find((item) =>
        item.classList.contains('desktop')
      );
    }
    // console.log(domElement);

    if (!domElement) {
      return;
    }

    const rectDom = domElement.getBoundingClientRect();
    const width = rectDom.width;
    const height = rectDom.height;
    const left = rectDom.left - window.innerWidth / 2 + width / 2;
    const top = -rectDom.top + window.innerHeight / 2 - height / 2;

    this._size.set(width * 0.3, height * 0.3);
    // left - window.innerWidth / 2 + width / 2
    // const newPositionX = lerp(this._position.x, left, 0.04);
    const newPositionX = left;
    let newPositionY = 0;

    // if (vevet.viewport.isPhone) {
    //   newPositionY = lerp(this._position.y, top, 0.88);
    //   // newPositionY = top;
    // } else {
    newPositionY = lerp(this._position.y, top, 0.6);
    // }

    this._position.set(newPositionX, newPositionY);
  }

  private _loadGLTF: () => Promise<GLTF> = () => {
    return new Promise((resolve) => {
      const loader = new GLTFLoader();
      loader.load(
        this._path,
        (gltf) => {
          resolve(gltf);
        },
        undefined,
        (error) => {
          console.error(error);
        }
      );
    });
  };

  private async _createMesh() {
    // const imageTexture = new THREE.TextureLoader().load('/public/model.glb');

    this._model = (await this._loadGLTF()).scene;

    const box = new THREE.Box3().setFromObject(this._model);
    const sizes = box.getSize(this._sizeGeometry);
    console.log(sizes, this._sizeGeometry);

    const scaleValue = this._size.x * (1 / this._sizeGeometry.x);
    this._model.position.set(this._position.x, this._position.y, 1);
    this._model.scale.set(scaleValue, scaleValue, scaleValue);

    this._uniforms = {
      uAlpha: { value: 1 },
      uTime: { value: 0.0 },
      uScale: { value: scaleValue }
    };

    const settings: IMaterialSettings = {
      shininess: 31.4,
      color: '#afa37d',
      specular: '#f7f7f7',
      emissive: '#37200d'
    };

    this._model.traverse((child) => {
      if (child.type === 'Mesh') {
        console.log(child);

        const mesh = child as THREE.Mesh;

        const material = new THREE.MeshPhongMaterial({
          shininess: settings.shininess,
          color: settings.color,
          specular: settings.specular,
          emissive: settings.emissive,

          // @ts-ignore
          onBeforeCompile: (shader: THREE.Shader) => {
            if (!this._uniforms) {
              return;
            }

            // storing shader that has already exist
            material.userData.shader = shader;

            // uniforms
            /* eslint-disable */
            shader.uniforms.uTime = this._uniforms.uTime;
            shader.uniforms.uAlpha = this._uniforms.uAlpha;
            shader.uniforms.uScale = this._uniforms.uScale;

            // const parsVertexString = `#include <displacementmap_pars_vertex>`;
            // shader.vertexShader = shader.vertexShader.replace(
            //   parsVertexString,
            //   `${parsVertexString}\n${vertexPars}`
            // );

            // const mainVertexString = `#include <displacementmap_vertex>`;
            // shader.vertexShader = shader.vertexShader.replace(
            //   mainVertexString,
            //   `${mainVertexString}\n${vertexMain}`
            // );

            // const parsFragmentString = `#include <bumpmap_pars_fragment>`;
            // shader.fragmentShader = shader.fragmentShader.replace(
            //   parsFragmentString,
            //   `${parsFragmentString}\n${fragmentPars}`
            // );

            // const mainFragmentString = `#include <normal_fragment_maps>`;
            // shader.fragmentShader = shader.fragmentShader.replace(
            //   mainFragmentString,
            //   `${mainFragmentString}\n${fragmentMain}`
            // );
            /* eslint-enable */

            // console.log(shader.fragmentShader);
          }
        });

        mesh.material = material;
        // mesh.geometry = geometry;

        // child.scale.set(sizes.x * 0.01, sizes.y * 0.01, sizes.z * 0.1);
      }
    });

    this._parent.add(this._model);
    console.log(this._model);
  }

  render(mouseCoordinates: THREE.Vector2) {
    if (!this._model || !this._uniforms) {
      return;
    }

    this._getDimensions();
    this._model.position.set(
      this._position.x * 0.8,
      this._position.y * 0.8,
      200
    );
    const scaleValueX = this._size.x * (1 / this._sizeGeometry.x);
    const scaleValueY = this._size.y * (1 / this._sizeGeometry.y);
    this._model.scale.set(
      scaleValueX * 1.7,
      scaleValueY * 1.7,
      scaleValueX * 1.7
    );

    this._uniforms.uTime.value = 0.00025 * (Date.now() - this._start);

    // console.log(this._mesh.rotation.x);

    this._model.rotation.y += 0.01;
    // this._mesh.rotation.y += 0.01;
    // this._mesh.position.x += 10;
  }
}
