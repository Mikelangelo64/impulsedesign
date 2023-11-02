import Popup from '../popupClass';
import selectFocusableChildren from './selectFocusableChildren';

const focusOutHandler = (popup: Popup) => {
  const focusableChildren = selectFocusableChildren(popup.parent);
  const lastFocusable = focusableChildren.item(focusableChildren.length - 1);

  popup.parent.addEventListener('keydown', (evt) => {
    if (evt.key !== 'Tab') {
      return;
    }

    if (document.activeElement === lastFocusable) {
      if (!popup.parent.classList.contains('_opened')) {
        return;
      }

      popup.parent.classList.remove('_opened');
      popup.timeline?.reverse();
    }
  });
};

const onHeaderHoverHandler = (popupArray: Popup[]) => {
  const header = document.querySelector<HTMLElement>('.header');
  if (!header) {
    return;
  }

  const container = header.querySelector<HTMLElement>('._container');
  const modalOpenElement =
    header.querySelector<HTMLAnchorElement>('.modal-open');

  if (!container || !modalOpenElement) {
    return;
  }

  popupArray.forEach((popup) => {
    if (popup.name === '_popup-header-modal') {
      modalOpenElement.addEventListener('mouseenter', () => {
        if (popup.parent.classList.contains('_opened')) {
          return;
        }

        popup.parent.classList.add('_opened');
        popup.timeline?.play();
      });

      modalOpenElement.addEventListener('focusin', () => {
        if (popup.parent.classList.contains('_opened')) {
          return;
        }

        popup.parent.classList.add('_opened');
        popup.timeline?.play();
      });

      header.addEventListener('mouseleave', () => {
        if (!popup.parent.classList.contains('_opened')) {
          return;
        }

        popup.parent.classList.remove('_opened');
        popup.timeline?.reverse();
      });

      focusOutHandler(popup);
    }
  });
};

export default onHeaderHoverHandler;
