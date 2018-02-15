#!/usr/bin/env node
import welcomeScreen, { check, getAnswer, checkCount, rezGcd } from '../index';

const gcd = (iter) => {
  const name = welcomeScreen('Find the greatest common divisor of given numbers.');
  let count = 0;
  for (let i = 0; i < iter; i += 1) {
    const rez = rezGcd();
    count = check(getAnswer(), rez, name, count);
  }
  checkCount(count, name, iter);
};

export default gcd;
