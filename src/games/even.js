#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcomScreen, { random, check } from '../index';

const evengame = () => {
  console.log('Welcome to the brain Games! \nAnswer "yes" if number even otherwise answer "no".\n');
  const name = welcomScreen();
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const a = random(0, 100);
    console.log(`Question: ${a}!`);
    const answer = readlineSync.question('Your answer: ');
    const rez = (a % 2 === 0) ? 'yes' : 'no';
    count = check(answer, rez, name, count);
  }
  if (count === 3) console.log(`Congratulations, ${name}`);
};

export default evengame;
