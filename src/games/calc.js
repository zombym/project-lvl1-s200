import { engine, rezCalc } from '../index';

const task = 'What is the result of the expression?';

const iter = 3;

const calc = engine(iter, task, rezCalc);

export default calc;
