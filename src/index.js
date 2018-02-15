#!/usr/bin/env node
import readlineSync from 'readline-sync';

const welcomScreen = (task) => {
  console.log(`Welcome to the brain Games! \n${task}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
  return name;
};

export const check = (answer, rez, name, cnt) => {
  if (answer === String(rez)) {
    console.log('Correct!');
    cnt += 1;
  } else console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rez}'\nLet's try again, ${name}`);
  return cnt;
};

export const random = (min, max) => Math.floor((Math.random() * (max - min)) + min);

export const nod = (n, m) => {
  if (m > 0) {
    const k = n % m;
    return nod(m, k);
  } return Math.abs(n);
};

export const checkCount = (count, name) => {
  if (count === 3) console.log(`Congratulations, ${name}`);
};

export const question = (qst) => {
  console.log(qst);
};

export const getAnswer = () => readlineSync.question('Your answer: ');

export default welcomScreen;
