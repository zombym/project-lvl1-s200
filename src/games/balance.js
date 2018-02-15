#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcomScreen, { random, check } from '../index';

const balance = () => {
  console.log('Welcome to the brain Games! \nBalance the given number.\n');
  const name = welcomScreen();
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    let summ = 0;
    let a = random(100, 999);
    a = String(a);
    console.log(`Question: ${a}!`);

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
    const answer = readlineSync.question('Your answer: ');

    count = check(answer, rez, name, count);
  }
  if (count === 3) console.log(`Congratulations, ${name}`);
};

export default balance;
