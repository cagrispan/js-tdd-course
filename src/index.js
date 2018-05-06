import { union } from 'ramda';

import { sum, sub, multi, div } from './utils';

const a = [1, 1, 1, 2, 3, 4, 5, 6, 6, 3];
const b = [6, 7, 6, 8, 8, 8, 9, 1, 1, 8];

const c = union(a, b);

console.log(c);
console.log(sum(2, 1));
console.log(sub(2, 1));
console.log(multi(2, 1));
console.log(div(2, 1));
