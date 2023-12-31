// void main() {
// vec3 coords = normal;
// coords.y += uTime;
// vec3 noisePattern = vec3(cnoise(coords));
// float pattern = wave(noisePattern);
// vDisplacement = pattern;

// vModelMatrix = projectionMatrix;
// float displacement = vDisplacement / 3.;

// transformed += normalize( objectNormal ) * displacement;

//float noise = 10. * -.1 * turbulance((.5 * normal) + uTime);
float noise = 1. * -.1 * turbulance((.5 * normal) + uTime);

float b = .5 * pnoise(1.4 * position + vec3(2. * uTime), vec3(100.));

float displacement = (noise + b) * uAlpha;
vDisplacement = b * uAlpha * (uScale * 1.);

//for my blob
// float noise = 1. * -.1 * turbulance((.5 * normal) + uTime);

// float b = .5 * pnoise(.8 * position + vec3(2. * uTime), vec3(100.));

// float displacement = (noise + b) * uAlpha;
// vDisplacement = b * uAlpha * (uScale * .5);

transformed += normalize( objectNormal ) * displacement;

// float noise = 10. * -0.1 * turbulance(0.5 * normal + uTime);

// float b = 5. * pnoise(0.05 * position + vec3(2. * uTime), vec3(100.));

// float displacement = -noise + b;
// vDisplacement = displacement * 0.1;

// transformed += normalize( objectNormal ) * displacement;