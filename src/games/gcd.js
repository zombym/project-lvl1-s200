import { engine, rezGcd } from '../index';

const task = 'Find the greatest common divisor of given numbers.';

const iter = 3;

const gcd = engine(iter, task, rezGcd);

export default gcd;
