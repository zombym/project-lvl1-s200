#!/usr/bin/env node
import welcomScreen, { random, check, getAnswer, checkCount, question } from '../index';

const balance = () => {
  const name = welcomScreen('Balance the given number.');
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    let summ = 0;
    let a = random(100, 999);
    a = String(a);
    question(`Question: ${a}!`);
    for (let s = 0; s < a.length; s += 1) {
      summ += Number(String(a[s]));
    }
    const sr = Math.floor(summ / a.length);
    const izl = summ - (a.length * sr);
    let rez = '';
    switch (izl) {
      case 1:
        rez = String(sr) + String(sr) + String(sr + 1);
        break;
      case 2:
        rez = String(sr) + String(sr + 1) + String(sr + 1);
        break;
      default:
        rez = String(sr) + sr + sr;
    }
    const answer = getAnswer();

    count = check(answer, rez, name, count);
  }
  checkCount(count, name);
};

export default balance;
