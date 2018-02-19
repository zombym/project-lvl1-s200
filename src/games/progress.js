import { engine, random } from '../index';

const task = 'What number is missing in this progression?';

const rezProgress = () => {
  const numberOfSymbol = random(5, 15);
  const secretNumber = random(1, numberOfSymbol - 1);
  const startNubmer = random(1, 30);
  const diff = random(2, 7);
  let a = `${startNubmer} `;
  for (let i = 1; i <= numberOfSymbol; i += 1) {
    if (i === secretNumber) { a += '.. '; i += 1; }
    a += `${startNubmer + (i * diff)} `;
  }
  const rez = startNubmer + (secretNumber * diff);
  const txt = a;
  return { txt, rez };
};

const progress = () => engine(task, rezProgress);

export default progress;
