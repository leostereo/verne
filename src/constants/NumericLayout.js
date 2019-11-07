const numeric3 = {
  _meta: {
    numbers: { keySet: 'numbers', text: '123', classes: 'control' },
    backspace: { func: 'backspace', classes: 'control' },
    accept: {
      func: 'accept', text: 'set', classes: 'control featured',
    },
    next: { func: 'next', text: 'Next', classes: 'control featured' },
    zero: { key: '0' },
  },
  default: [
    '1 2 3',
    '4 5 6',
    '7 8 9',
    '{zero} {backspace} . {accept}',
  ],
};

export default numeric3;
