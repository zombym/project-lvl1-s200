#!/usr/bin/env node
import welcomeScreen, { check, getAnswer, checkCount, rezCalc } from '../index';

const calc = (iter) => {
  const name = welcomeScreen('What is the result of the expression?');
  let count = 0;
  for (let i = 0; i < iter; i += 1) {
    const rez = rezCalc();
    count = check(getAnswer(), rez, name, count);
  }
  checkCount(count, name, iter);
};

export default calc;
