const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (input) => {
  // The theatre size = N * M.
  // The flag size = A^2, or A * A.
  const [n, m, a] = input.split(' ')

  // The trick of the problem is that a flagstone cannot be broken into pieces,
  // so in the case of 6 (n) / 4 (a) = 1.5. You have to ceil the result up
  // to 2, not 1.5.
  console.log(Math.ceil(n/a) * Math.ceil(m/a));

  rl.close();
});
