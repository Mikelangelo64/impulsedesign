import vevet from '../config/vevet';
import onHeaderHoverHandler from './headerModal/headerModalHover';
import Popup from './popupClass';

const initPopups = (): Popup[] => {
  const popupDomArr = document.querySelectorAll('.popup');

  if (popupDomArr.length === 0) {
    return [];
  }

  const popupArr: Popup[] = [];

  popupDomArr.forEach((element) => {
    const popup = new Popup(element as HTMLElement);
    popupArr.push(popup);
  });

  popupArr.forEach((popup) => {
    popup.initOpen(popupArr);

    if (popup.name === '_popup-header-modal') {
      const callback = () => {
        if (vevet.viewport.isDesktop) {
          return;
        }

        if (popup.parent.classList.contains('_opened')) {
          popup.timeline?.reverse();
          // document.querySelector('html')?.classList.remove('lock');
          // document.querySelector('body')?.classList.remove('lock');

          popup.video?.pause();
        }
      };

      popup.onWindowResize(callback);
    }
  });

  onHeaderHoverHandler(popupArr);

  return popupArr;
};

export default initPopups;
