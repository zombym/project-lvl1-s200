import { engine, rezBalance } from '../index';

const task = 'Balance the given number.';

const iter = 3;

const balance = engine(iter, task, rezBalance);

export default balance;
