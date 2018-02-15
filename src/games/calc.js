#!/usr/bin/env node
import welcomScreen, { random, check, getAnswer, checkCount, question } from '../index';

const calc = () => {
  const name = welcomScreen('What is the result of the expression?');
  let count = 0;
  let rez = 0;
  for (let i = 0; i < 3; i += 1) {
    const a = random(0, 100);
    const b = random(0, 100);
    const mv = random(1, 4);
    switch (mv) {
      case 1:
        question(`Question: ${a} + ${b}!`);
        rez = a + b;
        break;
      case 2:
        rez = a - b;
        question(`Question: ${a} - ${b}!`);
        break;
      case 3:
        rez = a * b;
        question(`Question: ${a} * ${b}!`);
        break;
      default:
    }
    const answer = getAnswer();
    count = check(answer, rez, name, count);
  }
  checkCount(count, name);
};

export default calc;
