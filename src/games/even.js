import { engine, random } from '../index';

const task = 'Answer "yes" if number even otherwise answer "no".';

const rezEven = () => {
  const a = random(0, 100);
  const rez = (a % 2 === 0) ? 'yes' : 'no';
  const txt = a;
  return { txt, rez };
};

const evengame = () => engine(task, rezEven);

export default evengame;
