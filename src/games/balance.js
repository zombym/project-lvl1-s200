#!/usr/bin/env node
import welcomScreen, { check, getAnswer, checkCount, rezBalance } from '../index';

const balance = () => {
  const name = welcomScreen('Balance the given number.');
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const rez = rezBalance();
    count = check(getAnswer(), rez, name, count);
  }
  checkCount(count, name);
};

export default balance;
