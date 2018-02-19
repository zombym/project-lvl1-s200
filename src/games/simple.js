import { engine, random } from '../index';

const task = 'Is this number prime?';

const rezSimple = () => {
  const a = random(0, 100);
  let count = 0;
  const simpleCheck = (num) => {
    for (let i = 1; i <= num; i += 1) {
      if (num % i === 0) count += 1;
    }
    if (count === 2) return true;
    return false;
  };
  const rez = (simpleCheck(a)) ? 'yes' : 'no';
  const txt = a;
  return { txt, rez };
};

const simple = () => engine(task, rezSimple);

export default simple;
