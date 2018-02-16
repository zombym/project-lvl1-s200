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

/* export const question = (qst) => {
  console.log(qst);
}; */

export const getAnswer = () => readlineSync.question('Your answer: ');

export const rezGcd = () => {
  const a = random(0, 100);
  const b = random(0, 100);
  const txt = `Question: ${a} ${b}!`;
  const rez = nod(a, b);
  return { rez, txt };
};

export const rezCalc = () => {
  const a = random(0, 100);
  const b = random(0, 100);
  const mv = random(1, 4);
  let rez = 0;
  let txt = '';
  switch (mv) {
    case 1:
      txt = `Question: ${a} + ${b}!`;
      rez = a + b;
      break;
    case 2:
      txt = `Question: ${a} - ${b}!`;
      rez = a - b;
      break;
    case 3:
      txt = `Question: ${a} * ${b}!`;
      rez = a * b;
      break;
    default:
      return null;
  }
  return { rez, txt };
};

export const rezBalance = () => {
  let summ = 0;
  let a = random(100, 999);
  a = String(a);
  const txt = `Question: ${a}!`;
  for (let s = 0; s < a.length; s += 1) summ += Number(String(a[s]));
  const sr = Math.floor(summ / a.length);
  const izl = summ - (a.length * sr);
  let rez = '';
  for (let s = izl; s < a.length; s += 1) rez += String(sr);
  for (let s = a.length - izl; s < a.length; s += 1) rez += String(sr + 1);
  return { rez, txt };
};

export const rezEven = () => {
  const a = random(0, 100);
  const rez = (a % 2 === 0) ? 'yes' : 'no';
  const txt = `Question: ${a}!`;
  return { txt, rez };
};

export const engine = (iter, task, rule) => {
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
