#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcomScreen, { random, check, nod } from '../index';

const gcd = () => {
  const name = welcomScreen();
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const a = random(0, 100);
    const b = random(0, 100);
    console.log(`Question: ${a} ${b}!`);
    const answer = readlineSync.question('Your answer: ');
    const rez = nod(a, b);
    count = check(answer, rez, name, count);
  }
  if (count === 3) console.log(`Congratulations, ${name}`);
};

export default gcd;
