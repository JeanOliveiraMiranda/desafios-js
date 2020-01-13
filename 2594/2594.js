const input = require("fs").readFileSync("./2594.txt", "utf8");
const lines = input.split("\r\n");

let M = lines[0];
let percorrer = lines[0] * 2;

let characters = [];
let words;

for (let i = 1; i <= percorrer; i++) {
  // PEGANDO VALORES DOS INPUTS
  if (i % 2 === 1) {
    characters = " " + lines[i] + " ";
  } else {
    words = lines[i];

    let charsToCompare = characters.split(" ");

    let arr = [];
    let indexes = -1;
    for (let item of charsToCompare) {
      if (item === words) {
        if (characters.includes(item)) {
          // console.log(item);
          indexes = characters.indexOf(" " + item + " ", indexes + 1);
          arr.push(indexes);
        }
      }
    }

    let res = arr.join(" ");
    if (res === "") {
      console.log(-1);
    } else {
      console.log(res);
    }
  }
}
