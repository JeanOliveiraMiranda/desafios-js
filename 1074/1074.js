let input = require("fs").readFileSync("./1074.txt", "utf8");
let lines = input.split("\r\n");
let items = [];

// Pega os valores das linhas e manda para a array items
for (let line of lines) {
  items.push(parseInt(line));
}

const verificaImparPar = number => {
  if (number % 2 === 0 || number % 2 === -0) {
    return "EVEN";
  }
  if (number % 2 === 1 || number % 2 === -1) {
    return "ODD";
  }
};

const verificarSinal = item => {
  let imparOuPar = verificaImparPar(item);
  let sinal = Math.sign(item);

  if (sinal === 0) {
    console.log("NULL");
  } else {
    if (sinal === 1) {
      console.log(`${imparOuPar} POSITIVE`);
    }
    if (sinal === -1) {
      console.log(`${imparOuPar} NEGATIVE`);
    }
  }
};

for (let [index, item] of items.entries()) {
  if (index > 0) {
    verificarSinal(item);
  }
}
