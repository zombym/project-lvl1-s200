#!/usr/bin/env node
import welcomeScreen, { check, getAnswer, checkCount, rezEven } from '../index';

const evengame = (iter) => {
  const name = welcomeScreen('Answer "yes" if number even otherwise answer "no".');
  let count = 0;
  for (let i = 0; i < iter; i += 1) {
    const rez = rezEven();
    count = check(getAnswer(), rez, name, count);
  }
  checkCount(count, name, iter);
};

export default evengame;
