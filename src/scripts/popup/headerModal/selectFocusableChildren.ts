const focusableElementsSelector = [
  'a[href]',
  'button',
  'input',
  'textarea',
  'select',
  'details',
  '[tabindex]'
]
  .map(
    (item) => `${item}:not(:disabled):not([tabindex="-1"]):not([type="hidden"])`
  )
  .join(',');

const selectFocusableChildren: (
  element: HTMLElement
) => NodeListOf<HTMLElement> = (element) => {
  return element.querySelectorAll(focusableElementsSelector);
};

export default selectFocusableChildren;
