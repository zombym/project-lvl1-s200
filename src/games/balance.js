#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcomScreen, { random, check } from '../index';

const balance = () => {
  console.log('Welcome to the brain Games! \nBalance the given number.\n');
  const name = welcomScreen();
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    let summ = 0;
    const a = random(100, 999);
    console.log(`Question: ${a}!`);
    const answer = readlineSync.question('Your answer: ');
    for (let s = 0; s < answer.length; s += 1) {
      summ += Number(answer[s]);
    }
    const sr = summ / answer.length;
    const izl = Math.round((sr - Math.floor(sr)) * answer.length);
    let rez = '';
    console.log(` sr = ${Math.floor(sr)} izl = ${izl}`);
    for (let s = answer.length; s > 0; s -= 1) {
      rez += String(Math.floor(sr) + Math.ceil(izl / 0.9));
    }

    count = check(answer, rez, name, count);
  }
  if (count === 3) console.log(`Congratulations, ${name}`);
};

export default balance;
