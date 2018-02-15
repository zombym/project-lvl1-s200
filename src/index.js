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

export const rezGcd = () => {
  const a = random(0, 100);
  const b = random(0, 100);
  question(`Question: ${a} ${b}!`);
  return nod(a, b);
};

export const rezEven = () => {
  const a = random(0, 100);
  question(`Question: ${a}!`);
  return (a % 2 === 0) ? 'yes' : 'no';
};

export const rezCalc = () => {
  const a = random(0, 100);
  const b = random(0, 100);
  const mv = random(1, 4);
  switch (mv) {
    case 1:
      question(`Question: ${a} + ${b}!`);
      return a + b;
    case 2:
      question(`Question: ${a} - ${b}!`);
      return a - b;
    case 3:
      question(`Question: ${a} * ${b}!`);
      return a * b;
    default:
      return null;
  }
};

export const rezBalance = () => {
  let summ = 0;
  let a = random(100, 999);
  a = String(a);
  question(`Question: ${a}!`);
  for (let s = 0; s < a.length; s += 1) summ += Number(String(a[s]));
  const sr = Math.floor(summ / a.length);
  const izl = summ - (a.length * sr);
  let rez = '';
  for (let s = izl; s < a.length; s += 1) rez += String(sr);
  for (let s = a.length - izl; s < a.length; s += 1) rez += String(sr + 1);
  return rez;
};

export default welcomScreen;
