const input = require("fs").readFileSync("./2593.txt", "utf8");
const lines = input.split("\r\n");

let characters = lines[0];
let M = lines[1];
let words = lines[2];

for (let i = 0; i < M; i++) {
  //   let charsToCompare = characters.split(" ");
  let wordsToCompare = words.trim().split(" ");
  let wordToCompare = wordsToCompare[i];

  //   fun
  let hits = [];
  let index = -1;
  do {
    index = characters.indexOf(wordToCompare + " ", index + 1);
    if (index >= 0) {
      hits.push(parseInt(index));
    }
    index = characters.indexOf(" " + wordToCompare);
    hits.push(parseInt(index));
  } while (index >= 0);

  let res = hits.join(" ");

  if (res === "") {
    console.log(-1);
  } else {
    console.log(res);
  }
}
