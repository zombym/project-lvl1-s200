#!/usr/bin/env node
import welcomScreen, { random, check, getAnswer, checkCount, question } from '../index';

const evengame = () => {
  const name = welcomScreen('Answer "yes" if number even otherwise answer "no".');
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const a = random(0, 100);
    question(`Question: ${a}!`);
    const answer = getAnswer();
    const rez = (a % 2 === 0) ? 'yes' : 'no';
    count = check(answer, rez, name, count);
  }
  checkCount(count, name);
};

export default evengame;
