#!/usr/bin/env node
import welcomeScreen, { check, getAnswer, checkCount, rezBalance } from '../index';

const balance = (iter) => {
  const name = welcomeScreen('Balance the given number.');
  let count = 0;
  for (let i = 0; i < iter; i += 1) {
    const rez = rezBalance();
    count = check(getAnswer(), rez, name, count);
  }
  checkCount(count, name, iter);
};

export default balance;
