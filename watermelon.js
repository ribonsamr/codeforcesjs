const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (input) => {
  let weight = Number(input);
  
  if (weight % 2 == 0 && weight > 2) {
    console.log("YES");
  } else {
    console.log("NO");
  }

  rl.close();
});
