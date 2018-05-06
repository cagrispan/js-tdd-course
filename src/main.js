import { union } from 'ramda';

const a = [1, 1, 1, 2, 3, 4, 5, 6, 6, 3];
const b = [6, 7, 6, 8, 8, 8, 9, 1, 1, 8];

const c = union(a, b);

export default c;
