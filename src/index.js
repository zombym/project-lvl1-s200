#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the brain Games!');
const name = readlineSync.question('Your answer: ');
console.log(`Hi ${name} !!!`);
