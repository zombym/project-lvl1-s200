import { engine, random } from '../index';

const task = 'Balance the given number.';

const rezBalance = () => {
  let summ = 0;
  let a = random(100, 999);
  a = String(a);
  const txt = `Question: ${a}!`;
  for (let s = 0; s < a.length; s += 1) summ += Number(String(a[s]));
  const sr = Math.floor(summ / a.length);
  const izl = summ - (a.length * sr);
  let rez = '';
  for (let s = izl; s < a.length; s += 1) rez += String(sr);
  for (let s = a.length - izl; s < a.length; s += 1) rez += String(sr + 1);
  return { rez, txt };
};

const balance = () => engine(task, rezBalance);

export default balance;
