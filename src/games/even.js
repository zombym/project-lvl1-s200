import { engine, rezEven } from '../index';

const task = 'Answer "yes" if number even otherwise answer "no".';

const iter = 3;

const evengame = engine(iter, task, rezEven);

export default evengame;
