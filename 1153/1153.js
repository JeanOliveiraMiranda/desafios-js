const input = require("fs").readFileSync("./1153.txt", "utf8");
const lines = input.split("\r\n");

let line = lines[0];


let acumula = 1;

for (line; line > 1; line--) {
  acumula = acumula * line;
}

console.log(acumula);
