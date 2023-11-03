import * as THREE from 'three';
// import vertex from '@/glsl/blob/vertex.glsl';
// import fragment from '@/glsl/blob/fragment.glsl';
import vertexPars from '@/glsl/blob/vertex_pars.glsl';
import vertexMain from '@/glsl/blob/vertex_main.glsl';
import fragmentMain from '@/glsl/blob/fragment_main.glsl';
import fragmentPars from '@/glsl/blob/fragment_pars.glsl';
import { lerp } from '@/scripts/config/lerp';
import { Timeline } from 'vevet';
import vevet from '../config/vevet';
// import { useDatGUISettings } from './gui/useDatGUISettings';

interface IMaterialSettings {
  shininess: number;
  color: number | string;
  specular: number | string;
  emissive: number | string;
}

export default class Blob {
  private _index: number;

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

  private _sizeGeometry: number;

  get sizeGeometry() {
    return this._sizeGeometry;
  }

  private _mesh: THREE.Mesh | undefined;

  private _meshHover: THREE.Mesh | undefined;

  private _uniforms: THREE.Shader['uniforms'] | undefined;

  private _parent: THREE.Object3D;

  get uniforms() {
    return this._uniforms;
  }

  constructor(
    scene: THREE.Scene,
    index: number,
    actionDomArray: HTMLElement[],
    parent: THREE.Object3D
  ) {
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
    this._sizeGeometry = 10;

    this._getDimensions();
    this._createMesh();
    this._onMouseOverOut();
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
    const newPositionY = lerp(this._position.y, top, 0.6);

    this._position.set(newPositionX, newPositionY);
  }

  private async _createMesh() {
    // const ratioSize = this._action.dom.getBoundingClientRect().width / 100;

    const geometry = new THREE.IcosahedronGeometry(this._sizeGeometry, 50);
    const geometryHover = new THREE.IcosahedronGeometry(this._sizeGeometry, 0);

    const scaleValue = this._size.x * (1 / this._sizeGeometry);

    this._uniforms = {
      uAlpha: { value: 1 },
      uTime: { value: 0.0 },
      uScale: { value: scaleValue }
    };

    // const material = new THREE.ShaderMaterial({
    //   uniforms: this._uniforms,
    //   vertexShader: vertex,
    //   fragmentShader: fragment,
    //   // side: THREE.DoubleSide,
    //   // wireframe: true,
    // });
    const settings: IMaterialSettings = {
      shininess: 31.4,
      color: '#afa37d',
      specular: '#f7f7f7',
      emissive: '#37200d'
    };

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

        const parsVertexString = `#include <displacementmap_pars_vertex>`;
        shader.vertexShader = shader.vertexShader.replace(
          parsVertexString,
          `${parsVertexString}\n${vertexPars}`
        );

        const mainVertexString = `#include <displacementmap_vertex>`;
        shader.vertexShader = shader.vertexShader.replace(
          mainVertexString,
          `${mainVertexString}\n${vertexMain}`
        );

        const parsFragmentString = `#include <bumpmap_pars_fragment>`;
        shader.fragmentShader = shader.fragmentShader.replace(
          parsFragmentString,
          `${parsFragmentString}\n${fragmentPars}`
        );

        const mainFragmentString = `#include <normal_fragment_maps>`;
        shader.fragmentShader = shader.fragmentShader.replace(
          mainFragmentString,
          `${mainFragmentString}\n${fragmentMain}`
        );
        /* eslint-enable */

        // console.log(shader.fragmentShader);
      }
    });

    const hoverMaterial = new THREE.MeshPhongMaterial({
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

        const parsVertexString = `#include <displacementmap_pars_vertex>`;
        shader.vertexShader = shader.vertexShader.replace(
          parsVertexString,
          `${parsVertexString}\n${vertexPars}`
        );

        const mainVertexString = `#include <displacementmap_vertex>`;
        shader.vertexShader = shader.vertexShader.replace(
          mainVertexString,
          `${mainVertexString}\n${vertexMain}`
        );

        const parsFragmentString = `#include <bumpmap_pars_fragment>`;
        shader.fragmentShader = shader.fragmentShader.replace(
          parsFragmentString,
          `${parsFragmentString}\n${fragmentPars}`
        );

        const mainFragmentString = `#include <normal_fragment_maps>`;
        shader.fragmentShader = shader.fragmentShader.replace(
          mainFragmentString,
          `${mainFragmentString}\n${fragmentMain}`
        );
        /* eslint-enable */

        // console.log(shader.fragmentShader);
      }
    });

    hoverMaterial.transparent = true;

    // const material = new THREE.MeshStandardMaterial({
    //   // color: 0x00ffff,
    // });

    this._mesh = new THREE.Mesh(geometry, material);
    this._meshHover = new THREE.Mesh(geometryHover, hoverMaterial);

    this._mesh.position.set(this._position.x, this._position.y, 0);
    this._meshHover.position.set(this._position.x, this._position.y, 0);

    this._mesh.scale.set(scaleValue, scaleValue, scaleValue);
    this._meshHover.scale.set(0, 0, 0);

    // useDatGUISettings({
    //   name: `material`,
    //   source: settings,
    //   onChange: (object) => {
    //     if (!this._mesh) {
    //       return;
    //     }
    //     // @ts-ignore
    //     this._mesh.material.shininess = object.shininess;
    //     // @ts-ignore
    //     this._mesh.material.color.set(object.color);
    //     // @ts-ignore
    //     this._mesh.material.specular.set(object.specular);
    //     // @ts-ignore
    //     this._mesh.material.emissive.set(object.emissive);
    //   },
    //   controls: [
    //     {
    //       name: 'shininess',
    //       type: 'number',
    //       min: 0,
    //       max: 100,
    //       step: 0.2
    //     },
    //     {
    //       name: 'color',
    //       type: 'color'
    //     },
    //     {
    //       name: 'specular',
    //       type: 'color'
    //     },
    //     {
    //       name: 'emissive',
    //       type: 'color'
    //     }
    //   ]
    // });

    // this._mesh.scale.set(
    //   this._size.x * 0.1,
    //   this._size.y * 0.1,
    //   this._size.x * 0.1,
    // );

    // this._mesh.rotation.set(-Math.PI / 2.2, 0, -25);

    this._parent.add(this._mesh);
    this._parent.add(this._meshHover);
  }

  private _onMouseOverOut() {
    const timeline = new Timeline({
      duration: 400,
      easing: [0.25, 0.1, 0.25, 1]
    });

    timeline.addCallback('progress', ({ easing }) => {
      if (!this._uniforms) {
        return;
      }

      this._uniforms.uAlpha.value = Math.max(1 - easing, 0.4);
    });

    const desktopDom = this._action.domArray.find((item) =>
      item.classList.contains('desktop')
    );
    const mobileDom = this._action.domArray.find((item) =>
      item.classList.contains('mobile')
    );

    if (!desktopDom || !mobileDom) {
      return;
    }

    desktopDom.addEventListener('mouseover', () => {
      this._action.isHover = true;
      timeline.play();
    });

    desktopDom.addEventListener('mouseout', () => {
      this._action.isHover = false;
      timeline.reverse();
    });
  }

  render(mouseCoordinates: THREE.Vector2) {
    if (!this._mesh || !this._meshHover || !this._uniforms) {
      return;
    }

    this._getDimensions();
    this._uniforms.uTime.value = 0.00025 * (Date.now() - this._start);

    // if (this._action.isHover) {
    //   this._uniforms.uAlpha.value = lerp(this._uniforms.uAlpha.value, 0, 0.06);
    //   this._meshHover.rotation.y += 0.1 * this._uniforms.uAlpha.value + 0.01;
    //   this._meshHover.rotation.x += 0.1 * this._uniforms.uAlpha.value + 0.01;

    //   // @ts-ignore
    //   this._meshHover.material.opacity = 1;
    // } else {
    //   this._uniforms.uAlpha.value = lerp(this._uniforms.uAlpha.value, 1, 0.2);

    //   // @ts-ignore
    //   this._meshHover.material.opacity = 0;
    // }

    this._mesh.position.set(this._position.x, this._position.y, 1);
    this._meshHover.position.set(this._position.x * 0.8, this._position.y, 200);

    // this._mesh.rotation.y += 0.01 + 0.1 * (1 - this._uniforms.uAlpha.value);
    this._mesh.rotation.y += 0.01;
    const scaleValue = this._size.x * (1 / this._sizeGeometry);

    this._mesh.scale.set(scaleValue, scaleValue, scaleValue);

    // this._mesh.scale.set(
    //   scaleValue * this._uniforms.uAlpha.value,
    //   scaleValue * this._uniforms.uAlpha.value,
    //   scaleValue * this._uniforms.uAlpha.value
    // );

    // this._meshHover.scale.set(
    //   scaleValue * (1 - this._uniforms.uAlpha.value) * 0.7,
    //   scaleValue * (1 - this._uniforms.uAlpha.value) * 0.7,
    //   scaleValue * (1 - this._uniforms.uAlpha.value) * 0.7
    // );
  }
}
