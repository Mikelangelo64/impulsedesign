(self.webpackChunkimpulse_design=self.webpackChunkimpulse_design||[]).push([[918,873],{5843:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){var n,t=e.callback,r=e.wait,i=void 0===r?250:r,o=e.isImmediate,a=void 0!==o&&o;return function(){var e=a&&!n;clearTimeout(n),n=setTimeout((function(){n=void 0,t()}),i),e&&t()}}},8733:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.lerp=void 0,n.lerp=function(e,n,t,r){void 0===r&&(r=.001);var i=e*(1-t)+n*t;return Math.abs(n-i)<=r?n:i}},5479:(e,n,t)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=new(t(5669).Application)({tablet:1199,phone:899,prefix:"v-",viewportResizeTimeout:100,easing:[.25,.1,.25,1]});n.default=r},2918:function(e,n,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var i=r(t(5479)),o=r(t(7685));i.default.pageLoad.onLoaded((function(){(0,o.default)()}))},1727:function(e,n,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t);var i=Object.getOwnPropertyDescriptor(n,t);i&&!("get"in i?!n.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return n[t]}}),Object.defineProperty(e,r,i)}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),i=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return i(n,e),n},a=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}c((r=r.apply(e,n||[])).next())}))},s=this&&this.__generator||function(e,n){var t,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(c){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(t=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=n.call(e,a)}catch(e){s=[6,e],r=0}finally{t=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var l=o(t(5232)),u=t(3867),f=c(t(3169)),v=c(t(6603)),d=c(t(2729)),h=c(t(7900)),m=t(8733),p=c(t(2735)),g=c(t(5479)),_=function(){function e(e,n,t,r){var i=this;this._loadGLTF=function(){return new Promise((function(e){(new u.GLTFLoader).load(i._path,(function(n){e(n)}),void 0,(function(e){console.error(e)}))}))},this._path=p.default,this._action={domArray:t,isHover:!1,isChangeGeometry:!1},this._parent=r,this._index=n,this._start=Date.now(),this._scene=e,this._position=new l.Vector2(0,0),this._size=new l.Vector2(0,0),this._sizeGeometry=new l.Vector3(1,1,1),this._getDimensions(),this._createMesh()}return Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sizeGeometry",{get:function(){return this._sizeGeometry},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"uniforms",{get:function(){return this._uniforms},enumerable:!1,configurable:!0}),e.prototype._getDimensions=function(){var e;if(e=g.default.viewport.isPhone&&window.innerWidth<=600?this._action.domArray.find((function(e){return e.classList.contains("mobile")})):this._action.domArray.find((function(e){return e.classList.contains("desktop")}))){var n=e.getBoundingClientRect(),t=n.width,r=n.height,i=n.left-window.innerWidth/2+t/2,o=-n.top+window.innerHeight/2-r/2;this._size.set(.3*t,.3*r);var a,s=i;a=(0,m.lerp)(this._position.y,o,.6),this._position.set(s,a)}},e.prototype._createMesh=function(){return a(this,void 0,void 0,(function(){var e,n,t,r,i,o=this;return s(this,(function(a){switch(a.label){case 0:return e=this,[4,this._loadGLTF()];case 1:return e._model=a.sent().scene,n=(new l.Box3).setFromObject(this._model),t=n.getSize(this._sizeGeometry),console.log(t,this._sizeGeometry),r=this._size.x*(1/this._sizeGeometry.x),this._model.position.set(this._position.x,this._position.y,1),this._model.scale.set(r,r,r),this._uniforms={uAlpha:{value:1},uTime:{value:0},uScale:{value:r}},i={shininess:31.4,color:"#afa37d",specular:"#f7f7f7",emissive:"#37200d"},this._model.traverse((function(e){if("Mesh"===e.type){console.log(e);var n=e,t=new l.MeshPhongMaterial({shininess:i.shininess,color:i.color,specular:i.specular,emissive:i.emissive,onBeforeCompile:function(e){o._uniforms&&(t.userData.shader=e)}});if(n.material=t,"Cube001"===e.name){var r=new l.MeshPhongMaterial({shininess:i.shininess,color:i.color,specular:i.specular,emissive:i.emissive,onBeforeCompile:function(e){if(o._uniforms){t.userData.shader=e,e.uniforms.uTime=o._uniforms.uTime,e.uniforms.uAlpha=o._uniforms.uAlpha,e.uniforms.uScale=o._uniforms.uScale;var n="#include <displacementmap_pars_vertex>";e.vertexShader=e.vertexShader.replace(n,"".concat(n,"\n").concat(f.default));var r="#include <displacementmap_vertex>";e.vertexShader=e.vertexShader.replace(r,"".concat(r,"\n").concat(v.default));var i="#include <bumpmap_pars_fragment>";e.fragmentShader=e.fragmentShader.replace(i,"".concat(i,"\n").concat(h.default));var a="#include <normal_fragment_maps>";e.fragmentShader=e.fragmentShader.replace(a,"".concat(a,"\n").concat(d.default))}}});n.material=r}}})),this._parent.add(this._model),console.log(this._model),[2]}}))}))},e.prototype.render=function(e){if(this._model&&this._uniforms){this._getDimensions(),this._model.position.set(.8*this._position.x,.8*this._position.y,200);var n=this._size.x*(1/this._sizeGeometry.x),t=this._size.y*(1/this._sizeGeometry.y);this._model.scale.set(1.7*n,1.7*t,1.7*n),this._uniforms.uTime.value=25e-5*(Date.now()-this._start),this._model.rotation.y+=.01}},e}();n.default=_},3228:function(e,n,t){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},r.apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t);var i=Object.getOwnPropertyDescriptor(n,t);i&&!("get"in i?!n.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return n[t]}}),Object.defineProperty(e,r,i)}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),o=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&i(n,e,t);return o(n,e),n},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.Sketch=void 0;var c=a(t(5232)),l=t(9365),u=t(5484),f=t(5786),v=t(4458),d=t(1503),h=t(7531),m=s(t(5843)),p=s(t(1727)),g=s(t(5479)),_=function(){function e(e,n){this._container=e,this._meshActionDomArray=n,this._meshItems=[],this._lightArr=[],this._viewport={width:window.innerWidth,height:window.innerHeight,aspectRatio:window.innerWidth/window.innerHeight},this._mouse=new c.Vector2(0,0),this._parent=new c.Object3D,this._createScene(),this._createCamera(),this._createLight(),this._initRenderer(),this._createMesh(),this.render(),window.addEventListener("resize",(0,m.default)({callback:this._onWindowResize.bind(this)}),!1),this._mouseMove()}return Object.defineProperty(e.prototype,"container",{get:function(){return this._container},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"viewport",{get:function(){return this._viewport},enumerable:!1,configurable:!0}),e.prototype._createScene=function(){this._scene=new c.Scene,this._scene.add(this._parent)},e.prototype._createCamera=function(){var e=2*Math.atan(this._viewport.height/2/1e3)*180/Math.PI;this._camera=new c.PerspectiveCamera(e,this._viewport.aspectRatio,1,1e3),this._camera.position.set(0,0,1e3)},e.prototype._createLight=function(){if(this._scene){var e={color:"#d2c880",intensity:.6},n={color:"#ffdc00",intensity:0},t=new c.DirectionalLight(e.color,e.intensity),i=new c.DirectionalLight(e.color,e.intensity);t.position.set(-2,0,2),i.position.set(0,2,2);var o=new c.AmbientLight(n.color,n.intensity);this._scene.add(t,i,o),this._lightArr.push(r({element:t,castShadow:!1},e)),this._lightArr.push(r({element:i,castShadow:!1},e)),this._lightArr.push(r({element:o,castShadow:!1},n))}},e.prototype._onWindowResize=function(){if(this._camera&&this._renderer){var e=window.innerHeight;if(g.default.viewport.isPhone){var n=Math.abs(this._viewport.height-window.innerHeight);console.log(n),n<100&&(e=this._viewport.height)}this._viewport={width:window.innerWidth,height:e,aspectRatio:window.innerWidth/e},this._camera.fov=2*Math.atan(this._viewport.height/2/1e3)*180/Math.PI,this._camera.aspect=this._viewport.aspectRatio,this._camera.updateProjectionMatrix(),this._renderer.setSize(this._viewport.width,this._viewport.height)}},e.prototype._mouseMove=function(){var e=this;this._container.addEventListener("mousemove",(function(n){var t=e._container.getBoundingClientRect(),r=(n.clientX-t.left)/t.width*2-1,i=-(n.clientY-t.top)/t.height*2+1;e._mouse.set(r,i)}))},e.prototype._initRenderer=function(){this._camera&&(this._renderer=new c.WebGLRenderer({antialias:!0,alpha:!0}),this._renderer.setSize(this._viewport.width,this._viewport.height),this._renderer.setPixelRatio(window.devicePixelRatio),this._container.appendChild(this._renderer.domElement))},e.prototype._initOrbitControls=function(){this._camera&&this._renderer&&(this._controls=new l.OrbitControls(this._camera,this._renderer.domElement),this._controls.enableDamping=!0)},e.prototype._initComposer=function(){if(this._renderer&&this._scene&&this._camera){var e=new v.RenderPass(this._scene,this._camera),n=new u.UnrealBloomPass(new c.Vector2(this._viewport.width,this._viewport.height),.501,.192,.18);this._composerBloom=new f.EffectComposer(this._renderer),this._composerBloom.renderToScreen=!1,this._composerBloom.addPass(e),this._composerBloom.addPass(n);var t=new h.ShaderPass(new c.ShaderMaterial({uniforms:{baseTexture:{value:null},bloomTexture:{value:this._composerBloom.renderTarget2.texture}},vertexShader:"\n          varying vec2 vUv;\n\n          void main() {\n            vUv = uv;\n\n            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n          }\n        ",fragmentShader:"\n          uniform sampler2D baseTexture;\n          uniform sampler2D bloomTexture;\n\n          varying vec2 vUv;\n\n          void main() {\n            vec4 base_color = texture2D(baseTexture, vUv);\n            vec4 bloom_color = texture2D(bloomTexture, vUv);\n\n            float lum = 0.21 * bloom_color.r + 0.71 * bloom_color.g + 0.07 * bloom_color.b;\n            gl_FragColor = vec4((base_color.rgb + bloom_color.rgb) * 2.4, max(base_color.a, lum));\n          }\n        ",defines:{}}),"baseTexture");t.needsSwap=!0,this._composerFinal=new f.EffectComposer(this._renderer);var r=new d.OutputPass;this._composerFinal.addPass(e),this._composerFinal.addPass(t),this._composerFinal.addPass(r)}},e.prototype._createMesh=function(){if(this._scene&&this._camera){var e=new p.default(this._scene,0,this._meshActionDomArray,this._parent);this._meshItems.push(e),this._camera.updateProjectionMatrix()}},e.prototype.render=function(){var e=this;0!==this._meshItems.length&&this._camera&&this._renderer&&this._scene&&(this._renderer.render(this._scene,this._camera),this._meshItems.forEach((function(n){n.render(e._mouse)})),requestAnimationFrame(this.render.bind(this)))},e}();n.Sketch=_},7685:(e,n,t)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(3228);n.default=function(){var e=document.querySelector("#three-js");if(e){var n=Array.from(document.querySelectorAll(".glob"));if(0!==n.length){var t=new r.Sketch(e,n);console.log(t)}}}},2729:e=>{e.exports="normal = perturbNormalArb( - vViewPosition, normal, vec2(dFdx(vDisplacement), dFdy(vDisplacement)), faceDirection );\r\n"},7900:e=>{e.exports="uniform float uTime;\r\nvarying float vDisplacement;\r\n\r\nvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\r\n\r\n\tvec3 vSigmaX = dFdx( surf_pos.xyz );\r\n\tvec3 vSigmaY = dFdy( surf_pos.xyz );\r\n\tvec3 vN = surf_norm; // normalized\r\n\r\n\tvec3 R1 = cross( vSigmaY, vN );\r\n\tvec3 R2 = cross( vN, vSigmaX );\r\n\r\n\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\r\n\r\n\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\r\n\treturn normalize( abs( fDet ) * surf_norm - vGrad );\r\n\r\n}"},6603:e=>{e.exports="// void main() {\r\n// vec3 coords = normal;\r\n// coords.y += uTime;\r\n// vec3 noisePattern = vec3(cnoise(coords));\r\n// float pattern = wave(noisePattern);\r\n// vDisplacement = pattern;\r\n\r\n// vModelMatrix = projectionMatrix;\r\n// float displacement = vDisplacement / 3.;\r\n\r\n// transformed += normalize( objectNormal ) * displacement;\r\n\r\n//float noise = 10. * -.1 * turbulance((.5 * normal) + uTime);\r\nfloat noise = 10. * -.1 * turbulance((.5 * normal) + uTime);\r\n\r\nfloat b = 5. * pnoise(.12 * position + vec3(2. * uTime), vec3(100.));\r\n\r\nfloat displacement = (noise + b) * uAlpha;\r\nvDisplacement = b * uAlpha * uScale;\r\n\r\ntransformed += normalize( objectNormal ); //* displacement;\r\n\r\n// float noise = 10. * -0.1 * turbulance(0.5 * normal + uTime);\r\n\r\n// float b = 5. * pnoise(0.05 * position + vec3(2. * uTime), vec3(100.));\r\n\r\n// float displacement = -noise + b;\r\n// vDisplacement = displacement * 0.1;\r\n\r\n// transformed += normalize( objectNormal ) * displacement;"},3169:e=>{e.exports='uniform float uTime;\r\nuniform float uAlpha;\r\nuniform float uScale;\r\n\r\nvarying mat4 vModelMatrix;\r\nvarying float vDisplacement;\r\n\r\n//\r\n// GLSL textureless classic 3D noise "cnoise",\r\n// with an RSL-style periodic variant "pnoise".\r\n// Author:  Stefan Gustavson (stefan.gustavson@liu.se)\r\n// Version: 2011-10-11\r\n//\r\n// Many thanks to Ian McEwan of Ashima Arts for the\r\n// ideas for permutation and gradient selection.\r\n//\r\n// Copyright (c) 2011 Stefan Gustavson. All rights reserved.\r\n// Distributed under the MIT license. See LICENSE file.\r\n// https://github.com/stegu/webgl-noise\r\n//\r\n\r\nvec3 mod289(vec3 x)\r\n{\r\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\r\n}\r\n\r\nvec4 mod289(vec4 x)\r\n{\r\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\r\n}\r\n\r\nvec4 permute(vec4 x)\r\n{\r\n  return mod289(((x*34.0)+10.0)*x);\r\n}\r\n\r\nvec4 taylorInvSqrt(vec4 r)\r\n{\r\n  return 1.79284291400159 - 0.85373472095314 * r;\r\n}\r\n\r\nvec3 fade(vec3 t) {\r\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\r\n}\r\n\r\n// Classic Perlin noise\r\nfloat cnoise(vec3 P)\r\n{\r\n  vec3 Pi0 = floor(P); // Integer part for indexing\r\n  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\r\n  Pi0 = mod289(Pi0);\r\n  Pi1 = mod289(Pi1);\r\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\r\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\r\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\r\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\r\n  vec4 iz0 = Pi0.zzzz;\r\n  vec4 iz1 = Pi1.zzzz;\r\n\r\n  vec4 ixy = permute(permute(ix) + iy);\r\n  vec4 ixy0 = permute(ixy + iz0);\r\n  vec4 ixy1 = permute(ixy + iz1);\r\n\r\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\r\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\r\n  gx0 = fract(gx0);\r\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\r\n  vec4 sz0 = step(gz0, vec4(0.0));\r\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\r\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\r\n\r\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\r\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\r\n  gx1 = fract(gx1);\r\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\r\n  vec4 sz1 = step(gz1, vec4(0.0));\r\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\r\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\r\n\r\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\r\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\r\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\r\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\r\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\r\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\r\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\r\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\r\n\r\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\r\n  g000 *= norm0.x;\r\n  g010 *= norm0.y;\r\n  g100 *= norm0.z;\r\n  g110 *= norm0.w;\r\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\r\n  g001 *= norm1.x;\r\n  g011 *= norm1.y;\r\n  g101 *= norm1.z;\r\n  g111 *= norm1.w;\r\n\r\n  float n000 = dot(g000, Pf0);\r\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\r\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\r\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\r\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\r\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\r\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\r\n  float n111 = dot(g111, Pf1);\r\n\r\n  vec3 fade_xyz = fade(Pf0);\r\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\r\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\r\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \r\n  return 2.2 * n_xyz;\r\n}\r\n\r\n// Classic Perlin noise, periodic variant\r\nfloat pnoise(vec3 P, vec3 rep)\r\n{\r\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\r\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\r\n  Pi0 = mod289(Pi0);\r\n  Pi1 = mod289(Pi1);\r\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\r\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\r\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\r\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\r\n  vec4 iz0 = Pi0.zzzz;\r\n  vec4 iz1 = Pi1.zzzz;\r\n\r\n  vec4 ixy = permute(permute(ix) + iy);\r\n  vec4 ixy0 = permute(ixy + iz0);\r\n  vec4 ixy1 = permute(ixy + iz1);\r\n\r\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\r\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\r\n  gx0 = fract(gx0);\r\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\r\n  vec4 sz0 = step(gz0, vec4(0.0));\r\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\r\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\r\n\r\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\r\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\r\n  gx1 = fract(gx1);\r\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\r\n  vec4 sz1 = step(gz1, vec4(0.0));\r\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\r\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\r\n\r\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\r\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\r\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\r\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\r\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\r\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\r\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\r\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\r\n\r\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\r\n  g000 *= norm0.x;\r\n  g010 *= norm0.y;\r\n  g100 *= norm0.z;\r\n  g110 *= norm0.w;\r\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\r\n  g001 *= norm1.x;\r\n  g011 *= norm1.y;\r\n  g101 *= norm1.z;\r\n  g111 *= norm1.w;\r\n\r\n  float n000 = dot(g000, Pf0);\r\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\r\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\r\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\r\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\r\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\r\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\r\n  float n111 = dot(g111, Pf1);\r\n\r\n  vec3 fade_xyz = fade(Pf0);\r\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\r\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\r\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \r\n  return 2.2 * n_xyz;\r\n}\r\n\r\nfloat turbulance(vec3 p) {\r\n  float w = 100.;\r\n  float t = -0.5;\r\n\r\n  for (float f = 1.0; f <= 10.0; f++) {\r\n    float power = pow(2.0, f);\r\n    t += abs(pnoise(vec3(power * p), vec3( 10., 10., 10.)) / power);\r\n  }\r\n\r\n  return t;\r\n}\r\n\r\nfloat smoothMod(float axis, float amp, float rad){\r\n  float top = cos(PI * (axis / amp)) * sin(PI * (axis / amp));\r\n  float bottom = pow(sin(PI * (axis / amp)), 2.0) + pow(rad, 2.0);\r\n  float at = atan(top / bottom);\r\n  return amp * (1.0 / 2.0) - (1.0 / PI) * at;\r\n}\r\n\r\nfloat wave(vec3 position) {\r\n  return smoothMod(position.y * 15., 1., 1.5);\r\n}\r\n\r\n// void main() {\r\n//   vec3 coords = normal;\r\n//   coords.y += uTime;\r\n//   vec3 noisePattern = vec3(cnoise(coords));\r\n//   float pattern = wave(noisePattern);\r\n//   vDisplacement = pattern;\r\n\r\n//   vUv = uv;\r\n//   vNormal = normal;\r\n//   vPosition = position;\r\n//   vModelMatrix = projectionMatrix;\r\n\r\n//   //indian guy\r\n//   float displacement = vDisplacement / 3.;\r\n//   vec3 newPosition = position + normal * displacement;\r\n\r\n//   gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(newPosition, 1.0 );\r\n\r\n//   // blob\r\n//   //  float noise = 10. * -0.1 * turbulance(0.5 * normal + uTime);\r\n\r\n//   //  float b = 5. * pnoise(0.05 * position + vec3(2. * uTime), vec3(100.));\r\n\r\n//   //  float displacement = -noise + b;\r\n//   //  vDisplacement = displacement;\r\n\r\n//   //  vec3 newPosition = position + normal * displacement;\r\n\r\n//   //  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4( newPosition, 1.0 );\r\n// }'},2735:(e,n,t)=>{"use strict";e.exports=t.p+"./assets/models/model-1.glb"}}]);