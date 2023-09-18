const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Podaj wartosc', (value) => {
    
    readline.close();
  });
