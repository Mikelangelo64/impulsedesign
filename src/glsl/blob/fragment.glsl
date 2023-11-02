uniform sampler2D uTexture;
uniform float uTime;

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying mat4 vModelMatrix;
varying float vDisplacement;


void main() {
  // vec3 viewDirection = normalize(cameraPosition - vPosition);
  // float fresnel = dot(viewDirection, vNormal);
  // gl_FragColor = vec4(vec3(fresnel), 1.0);

  // vec3 color = texture2D(uTexture, vUv).rgb;
  // color.r *= 1. - vDisplacement * 0.1;
  // color.g *= 1. - vDisplacement * 0.1;
  // color.b = 0.;

  gl_FragColor = vec4(vec3(vDisplacement), 1.);
}