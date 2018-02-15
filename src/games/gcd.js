#!/usr/bin/env node
import welcomScreen, { random, check, nod, getAnswer, checkCount, question } from '../index';

const gcd = () => {
  const name = welcomScreen('Find the greatest common divisor of given numbers.');
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const a = random(0, 100);
    const b = random(0, 100);
    question(`Question: ${a}!`);
    const answer = getAnswer();
    const rez = nod(a, b);
    count = check(answer, rez, name, count);
  }
  checkCount(count, name);
};

export default gcd;
