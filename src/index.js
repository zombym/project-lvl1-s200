import readlineSync from 'readline-sync';

const welcomeScreen = (task) => {
  console.log(`Welcome to the brain Games! \n${task}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
  return name;
};


export const check = (answer, rez, name, cnt) => {
  let ct = cnt;
  if (answer === String(rez)) {
    console.log('Correct!');
    ct += 1;
  } else console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rez}'\nLet's try again, ${name}`);
  return ct;
};

export const random = (min, max) => Math.floor((Math.random() * (max - min)) + min);

export const nod = (n, m) => {
  if (m > 0) {
    const k = n % m;
    return nod(m, k);
  } return Math.abs(n);
};

export const checkCount = (count, name, iter) => {
  if (count === iter) console.log(`Congratulations, ${name}`);
};

export const getAnswer = () => readlineSync.question('Your answer: ');

export const engine = (task, rule) => {
  const iter = 3;
  const name = welcomeScreen(task);
  let count = 0;
  for (let i = 0; i < iter; i += 1) {
    const { txt, rez } = rule();
    console.log(txt);
    const answer = getAnswer();
    count = check(answer, rez, name, count);
  }
  checkCount(count, name, iter);
};

export default welcomeScreen;
