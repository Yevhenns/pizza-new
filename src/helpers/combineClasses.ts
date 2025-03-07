export const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(className => className).join(' ');
};
