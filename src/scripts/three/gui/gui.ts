import { GUI } from 'dat.gui';

// declare global {
//   interface Window {
//     USE_DAT_GUI?: boolean;
//   }
// }

/** dat.gui instance */
export const datGUI = new Promise((resolve: (arg: GUI | null) => void) => {
  const canUseGUI = true;

  if (!canUseGUI) {
    resolve(null);

    return;
  }

  import('dat.gui')
    .then((module) => {
      const instance = new module.GUI({
        closed: true
      });

      const style = document.createElement('style');
      style.innerHTML = '.dg.ac { z-index: 999 !important; }';
      document.body.appendChild(style);

      resolve(instance);
    })
    .catch(() => {});
});

export type { GUI };
