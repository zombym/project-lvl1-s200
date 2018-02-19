import { engine, nod, random } from '../index';

const task = 'Find the greatest common divisor of given numbers.';

export const rezGcd = () => {
  const a = random(0, 100);
  const b = random(0, 100);
  const txt = `${a} ${b}`;
  const rez = nod(a, b);
  return { rez, txt };
};

const gcd = () => engine(task, rezGcd);

export default gcd;
