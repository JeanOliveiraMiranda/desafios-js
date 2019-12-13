var input = require("fs").readFileSync("./1002.txt", "utf8");
var lines = input.split("\r\n");
let n = 3.14159;
let items = [];

// Pega os valores das linhas e manda para a array items
for (let line of lines) {
  items.push(parseFloat(line));
}

// valor do raio e da área
let R = Math.pow(items[0], 2);
let A = (n * R).toFixed(4);

console.log(`A=${A}`);