#!/usr/bin/env node
import readlineSync from 'readline-sync';

const evengame = () => {
  console.log('Welcome to the brain Games! \nAnswer "yes" if number even otherwise answer "no".\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const a = Math.floor(Math.random() * 100);
    let b = '';
    console.log(`Question: ${a}!`);
    const answer = readlineSync.question('Your answer: ');
    (a % 2 === 0) ? b = 'yes' : b = 'no';
    if (answer === b) {
      console.log('Correct!');
      count += 1;
    } else console.log(`'${answer}' is wrong answer ;(. Correct answer was '${b}'\nLet's try again, ${name}`);
  }
  if (count === 3) console.log(`Congratulations, ${name}`);
};

export default evengame;
