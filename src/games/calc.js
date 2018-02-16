import { engine, random } from '../index';

const task = 'What is the result of the expression?';

const rezCalc = () => {
  const a = random(0, 100);
  const b = random(0, 100);
  const mv = random(1, 4);
  let rez = 0;
  let txt = '';
  switch (mv) {
    case 1:
      txt = `Question: ${a} + ${b}!`;
      rez = a + b;
      break;
    case 2:
      txt = `Question: ${a} - ${b}!`;
      rez = a - b;
      break;
    case 3:
      txt = `Question: ${a} * ${b}!`;
      rez = a * b;
      break;
    default:
      return null;
  }
  return { rez, txt };
};

const calc = () => engine(task, rezCalc);

export default calc;
