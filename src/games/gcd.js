#!/usr/bin/env node
import welcomScreen, { check, getAnswer, checkCount, rezGcd } from '../index';

const gcd = () => {
  const name = welcomScreen('Find the greatest common divisor of given numbers.');
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const rez = rezGcd();
    count = check(getAnswer(), rez, name, count);
  }
  checkCount(count, name);
};

export default gcd;
