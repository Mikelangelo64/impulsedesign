import accordionInit from './accordion/init';
import initPopups from './popup/init';
import scrollBarInit from './scrollbar';

export const init = () => {
  scrollBarInit();
  accordionInit();

  // const header = document.querySelector('.header') as HTMLElement;
  // // const headerHeight = header ? header.offsetHeight : 0;
  // let isScrolled = false;

  // if (header) {
  //   if (window.scrollY > 20) {
  //     header.classList.add('scrolled');
  //     isScrolled = true;
  //   }

  //   window.addEventListener('scroll', () => {
  //     if (window.scrollY > 20 && !isScrolled) {
  //       header.classList.add('scrolled');
  //       isScrolled = true;
  //       return;
  //     }

  //     if (window.scrollY <= 20 && isScrolled) {
  //       header.classList.remove('scrolled');
  //       isScrolled = false;
  //     }
  //   });
  // }

  const popups = initPopups();

  const formArr = document.querySelectorAll('form');
  const hasError = false;

  if (formArr.length !== 0) {
    formArr.forEach((form) => {
      form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        const inputs = Array.from(
          form.querySelectorAll('input, textarea') as NodeListOf<
            HTMLInputElement | HTMLTextAreaElement
          >
        );

        popups.forEach(({ timeline, isThanks, isError }) => {
          if (isThanks && !hasError) {
            timeline?.play();

            if (inputs.length !== 0) {
              inputs.forEach((inputProp) => {
                const input = inputProp;
                input.value = '';
              });
            }
          } else if (isError && hasError) {
            timeline?.play();
          } else {
            timeline?.reverse();
          }
        });
      });
    });

    // document.addEventListener(
    //   'wpcf7mailsent',
    //   function () {
    //     popups.forEach(({ timeline, isThanksPopup }) => {
    //       if (isThanksPopup) {
    //         timeline.play();
    //       } else {
    //         timeline.reverse();
    //       }
    //     });
    //   },
    //   false
    // );
  }
};
