#!/usr/bin/env node
import welcomScreen, { check, getAnswer, checkCount, rezEven } from '../index';

const evengame = () => {
  const name = welcomScreen('Answer "yes" if number even otherwise answer "no".');
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const rez = rezEven();
    count = check(getAnswer(), rez, name, count);
  }
  checkCount(count, name);
};

export default evengame;
