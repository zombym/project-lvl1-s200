#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcomScreen, { random, check } from '../index';

const calc = () => {
  console.log('Welcome to the brain Games! \nAWhat is the result of the expression?\n');
  const name = welcomScreen();
  let count = 0;
  let rez = 0;
  for (let i = 0; i < 3; i += 1) {
    const a = random(0, 100);
    const b = random(0, 100);
    const mv = random(1, 4);
    switch (mv) {
      case 1:
        console.log(`Question: ${a} + ${b}!`);
        rez = a + b;
        break;
      case 2:
        rez = a - b;
        console.log(`Question: ${a} - ${b}!`);
        break;
      case 3:
        rez = a * b;
        console.log(`Question: ${a} * ${b}!`);
        break;
      default:
    }
    const answer = readlineSync.question('Your answer: ');

    count = check(answer, rez, name, count);
  }
  if (count === 3) console.log(`Congratulations, ${name}`);
};

export default calc;
