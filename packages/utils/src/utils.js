import { navigate } from '@reach/router';

export const moveTo = ({
  slug, length, index, setState,
}) => {
  const n = index;
  if (n >= length || n < 0) return;
  navigate([slug, n].join('/'));
  setState({ step: 0 });
};

export default {
  moveTo,
};
