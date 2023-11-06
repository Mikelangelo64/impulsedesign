import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import debounce from '../config/debounce';
import BlobGLTF from './BlobGLTF';
import vevet from '../config/vevet';
import Blob from './Blob';
// import Blob from './Blob';
// import { AnimationFrame, utils } from 'vevet';
// import { useDatGUISettings } from './gui/useDatGUISettings';

interface ILight {
  element: THREE.AmbientLight | THREE.DirectionalLight | THREE.SpotLight;
  color: number | string;
  intensity: number;
  castShadow: boolean;
}

interface IComposerBloom {
  strength: number;
  radius: number;
  threshold: number;
}

export class Sketch {
  private _container: HTMLElement;

  get container() {
    return this._container;
  }

  private _viewport: {
    width: number;
    height: number;
    aspectRatio: number;
  };

  get viewport() {
    return this._viewport;
  }

  private _mouse: THREE.Vector2;

  private _scene: THREE.Scene | undefined;

  private _camera: THREE.PerspectiveCamera | undefined;

  private _lightArr: ILight[];

  private _controls: OrbitControls | undefined;

  private _composerBloom: EffectComposer | undefined;

  private _composerFinal: EffectComposer | undefined;

  private _renderer: THREE.WebGLRenderer | undefined;

  private _meshItems: Blob[];

  private _parent: THREE.Object3D;

  private _meshActionDomArray: HTMLElement[];

  // private _frameResize: AnimationFrame | undefined;

  constructor(container: HTMLElement, meshActionDomArary: HTMLElement[]) {
    this._container = container;
    this._meshActionDomArray = meshActionDomArary;
    this._meshItems = [];
    this._lightArr = [];

    this._viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
      aspectRatio: window.innerWidth / window.innerHeight
    };

    this._mouse = new THREE.Vector2(0, 0);

    this._parent = new THREE.Object3D();

    this._createScene();
    this._createCamera();
    this._createLight();
    this._initRenderer();
    // this._initOrbitControls();
    // this._initComposer();
    this._createMesh();
    this.render();
    // this._postProcessing();

    // this._changeWindowHeight();

    window.addEventListener(
      'resize',
      debounce({
        callback: this._onWindowResize.bind(this)
      }),
      false
    );
    // this._onWindowScroll();
    this._mouseMove();
  }

  private _createScene() {
    this._scene = new THREE.Scene();
    // this._scene.background = new THREE.Color(0x000000);
    this._scene.add(this._parent);
  }

  private _createCamera() {
    const fov =
      (180 * (2 * Math.atan(this._viewport.height / 2 / 1000))) / Math.PI;

    this._camera = new THREE.PerspectiveCamera(
      fov,
      this._viewport.aspectRatio,
      1,
      1000
    );

    this._camera.position.set(0, 0, 1000);
  }

  private _createLight() {
    if (!this._scene) {
      return;
    }
    const settingsDirection = {
      color: '#d2c880',
      intensity: 0.6
    };
    const settingsAmbient = {
      color: '#ffdc00',
      intensity: 0.0
    };

    const directionLight = new THREE.DirectionalLight(
      settingsDirection.color,
      settingsDirection.intensity
    );

    const directionLight2 = new THREE.DirectionalLight(
      settingsDirection.color,
      settingsDirection.intensity
    );
    directionLight.position.set(-2, 0, 2);
    directionLight2.position.set(0, 2, 2);

    const ambientLight = new THREE.AmbientLight(
      settingsAmbient.color,
      settingsAmbient.intensity
    );

    this._scene.add(directionLight, directionLight2, ambientLight);

    this._lightArr.push({
      element: directionLight,
      castShadow: false,
      ...settingsDirection
    });
    this._lightArr.push({
      element: directionLight2,
      castShadow: false,
      ...settingsDirection
    });
    this._lightArr.push({
      element: ambientLight,
      castShadow: false,
      ...settingsAmbient
    });

    // this._lightArr.forEach((light, index) => {
    //   useDatGUISettings({
    //     name: `light-${index}`,
    //     source: light,
    //     onChange(object) {
    //       object.element.color.set(object.color);
    //       // eslint-disable-next-line
    //       object.element.castShadow = object.castShadow;
    //       // eslint-disable-next-line
    //       object.element.intensity = object.intensity;
    //     },
    //     controls: [
    //       {
    //         name: 'intensity',
    //         type: 'number',
    //         min: 0,
    //         max: 1,
    //         step: 0.1,
    //       },
    //       {
    //         name: 'color',
    //         type: 'color',
    //       },
    //       {
    //         name: 'castShadow',
    //         type: 'boolean',
    //       },
    //     ],
    //   });
    // });
    // this._lightArr.forEach((light, index) => {
    // });
  }

  // private _changeWindowHeight() {
  //   const frame = new AnimationFrame({ fps: 60 });

  //   const render = () => {
  //     if (
  //       !this._camera ||
  //       !this._renderer
  //       // !this._composerBloom ||
  //       // !this._composerFinal
  //       // !this._controls
  //     ) {
  //       return;
  //     }

  //     this._viewport = {
  //       width: window.innerWidth,
  //       height: utils.math.lerp(this._viewport.height, window.innerHeight, 0.8),
  //       aspectRatio: window.innerWidth / this._viewport.height
  //     };

  //     // this._controls.update();

  //     console.log(this._viewport.height);

  //     this._camera.fov =
  //       (180 * (2 * Math.atan(this._viewport.height / 2 / 1000))) / Math.PI;
  //     this._camera.aspect = this._viewport.aspectRatio;
  //     this._camera.updateProjectionMatrix();

  //     this._renderer.setSize(this._viewport.width, this._viewport.height);

  //     if (this._viewport.height === window.innerHeight) {
  //       frame.pause();
  //     }
  //   };

  //   frame.addCallback('frame', () => {
  //     render();
  //   });

  //   frame.pause();
  //   this._frameResize = frame;
  // }

  private _onWindowResize() {
    // if (!this._frameResize) {
    //   return;
    // }
    // this._frameResize.play();

    if (
      !this._camera ||
      !this._renderer
      // !this._composerBloom ||
      // !this._composerFinal
      // !this._controls
    ) {
      return;
    }

    let newHeight = window.innerHeight;

    if (vevet.viewport.isPhone) {
      const difference = Math.abs(this._viewport.height - window.innerHeight);
      console.log(difference);

      if (difference < 100) {
        newHeight = this._viewport.height;
      }

      // newHeight = window.outerHeight;
    }

    this._viewport = {
      width: window.innerWidth,
      height: newHeight,
      aspectRatio: window.innerWidth / newHeight
    };

    // // this._controls.update();

    // console.log(this._viewport.height);

    this._camera.fov =
      (180 * (2 * Math.atan(this._viewport.height / 2 / 1000))) / Math.PI;
    this._camera.aspect = this._viewport.aspectRatio;

    this._camera.updateProjectionMatrix();

    this._renderer.setSize(this._viewport.width, this._viewport.height);

    // this._composerBloom.setSize(this._viewport.width, this._viewport.height);
    // this._composerFinal.setSize(this._viewport.width, this._viewport.height);

    // this._composer.passes.forEach((pass) => {
    //   /* @ts-ignore */
    //   if (pass.camera) {
    //     /* @ts-ignore */ /* eslint-disable-next-line */
    //     pass.camera = this._camera;
    //   }
    // });
    // this._composer.dispose();
    // this._initComposer();
  }

  // private _onWindowScroll() {

  //   // window.addEventListener('wheel', (evt) => {
  //   //   if (!this._camera) {
  //   //     return;
  //   //   }
  //   //   this._camera.zoom += evt.deltaY * -0.01;
  //   //   this._camera.updateProjectionMatrix();
  //   // });
  // }

  private _mouseMove() {
    this._container.addEventListener('mousemove', (evt) => {
      const rect = this._container.getBoundingClientRect();

      const x = ((evt.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((evt.clientY - rect.top) / rect.height) * 2 + 1;

      this._mouse.set(x, y);
    });
  }

  private _initRenderer() {
    if (!this._camera) {
      return;
    }

    this._renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    // this._renderer.setClearColor(0x000000);
    this._renderer.setSize(this._viewport.width, this._viewport.height);
    this._renderer.setPixelRatio(window.devicePixelRatio);

    this._container.appendChild(this._renderer.domElement);
  }

  private _initOrbitControls() {
    if (!this._camera || !this._renderer) {
      return;
    }

    this._controls = new OrbitControls(this._camera, this._renderer.domElement);
    this._controls.enableDamping = true;
  }

  private _initComposer() {
    if (!this._renderer || !this._scene || !this._camera) {
      return;
    }
    // const target = new THREE.WebGLRenderTarget(
    //   this._viewport.width,
    //   this._viewport.height,
    // );

    const settings: IComposerBloom = {
      strength: 0.501,
      radius: 0.192,
      threshold: 0.18
    };

    const renderPass = new RenderPass(this._scene, this._camera);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(this._viewport.width, this._viewport.height),
      settings.strength,
      settings.radius,
      settings.threshold
    );

    // bloom effect (no visible, only for final composer)
    this._composerBloom = new EffectComposer(this._renderer);
    this._composerBloom.renderToScreen = false;
    this._composerBloom.addPass(renderPass);
    this._composerBloom.addPass(bloomPass);

    // final composer
    const mixPass = new ShaderPass(
      new THREE.ShaderMaterial({
        uniforms: {
          baseTexture: { value: null },
          bloomTexture: { value: this._composerBloom.renderTarget2.texture }
        },
        vertexShader: `
          varying vec2 vUv;

          void main() {
            vUv = uv;

            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
          }
        `,
        fragmentShader: `
          uniform sampler2D baseTexture;
          uniform sampler2D bloomTexture;

          varying vec2 vUv;

          void main() {
            vec4 base_color = texture2D(baseTexture, vUv);
            vec4 bloom_color = texture2D(bloomTexture, vUv);

            float lum = 0.21 * bloom_color.r + 0.71 * bloom_color.g + 0.07 * bloom_color.b;
            gl_FragColor = vec4((base_color.rgb + bloom_color.rgb) * 2.4, max(base_color.a, lum));
          }
        `,
        defines: {}
      }),
      'baseTexture'
    );
    mixPass.needsSwap = true;

    this._composerFinal = new EffectComposer(this._renderer);
    const outputPass = new OutputPass();

    this._composerFinal.addPass(renderPass);
    this._composerFinal.addPass(mixPass);
    this._composerFinal.addPass(outputPass);

    // useDatGUISettings({
    //   name: 'composer Bloom',
    //   source: settings,
    //   onChange: (object) => {
    //     if (!this._composerBloom) {
    //       return;
    //     }
    //     // @ts-ignore
    //     this._composerBloom.passes[1].strength = object.strength;
    //     // @ts-ignore
    //     this._composerBloom.passes[1].radius = object.radius;
    //     // @ts-ignore
    //     this._composerBloom.passes[1].threshold = object.threshold;
    //   },
    //   controls: [
    //     {
    //       name: 'strength',
    //       type: 'number',
    //       min: 0,
    //       max: 1,
    //       step: 0.001
    //     },
    //     {
    //       name: 'threshold',
    //       type: 'number',
    //       min: 0,
    //       max: 1,
    //       step: 0.001
    //     },
    //     {
    //       name: 'radius',
    //       type: 'number',
    //       min: 0,
    //       max: 1,
    //       step: 0.001
    //     }
    //   ]
    // });
  }

  private _createMesh() {
    if (!this._scene || !this._camera) {
      return;
    }

    const mesh = new Blob(
      this._scene,
      0,
      this._meshActionDomArray,
      this._parent
    );
    this._meshItems.push(mesh);
    this._camera.updateProjectionMatrix();
    // console.log(this._scene);
  }

  // private _postProcessing() {
  //   if (!this._composer) {
  //     return;
  //   }

  //   this._composer.addPass(
  //     new UnrealBloomPass(
  //       new THREE.Vector2(this._viewport.width, this._viewport.height),
  //       0.7,
  //       0.4,
  //       0.4,
  //     ),
  //   );
  // }

  render() {
    if (
      this._meshItems.length === 0 ||
      !this._camera ||
      !this._renderer ||
      !this._scene
      // !this._controls ||
      // !this._composerBloom ||
      // !this._composerFinal
    ) {
      return;
    }

    this._renderer.render(this._scene, this._camera);
    // this._composerBloom.render();
    // this._composerFinal.render();
    // this._controls.update();

    this._meshItems.forEach((mesh) => {
      mesh.render(this._mouse);
    });

    // this._camera.position.x += 0.01 * this._mouse.x;
    requestAnimationFrame(this.render.bind(this));
  }
}
