varying vec2 vUv;

out vec3 vertexColor;

void main() {
   vUv = uv;
   vertexColor = vec3(0.f, 0.5f, 0.0f);

   gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4( position, 1.0 );
}