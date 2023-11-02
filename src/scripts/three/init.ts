import { Sketch } from './Sketch';

const initThree = () => {
  const container = document.querySelector<HTMLElement>('#three-js');

  if (!container) {
    return;
  }

  const globDomArray = Array.from(
    document.querySelectorAll<HTMLElement>('.glob')
  );

  if (globDomArray.length === 0) {
    return;
  }

  const sketch = new Sketch(container, globDomArray);
  console.log(sketch);
};

export default initThree;
