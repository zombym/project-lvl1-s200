#!/usr/bin/env node
import welcomScreen, { check, getAnswer, checkCount, rezCalc } from '../index';

const calc = () => {
  const name = welcomScreen('What is the result of the expression?');
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const rez = rezCalc();
    count = check(getAnswer(), rez, name, count);
  }
  checkCount(count, name);
};

export default calc;
