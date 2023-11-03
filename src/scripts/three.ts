import vevet from './config/vevet';
import initThree from './three/init';

vevet.pageLoad.onLoaded(() => {
  initThree();
});
