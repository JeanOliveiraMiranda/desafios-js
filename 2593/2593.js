const input = require("fs").readFileSync("./2593.txt", "utf8");
const lines = input.split("\r\n");

let characters = " " + lines[0] + " ";

let M = lines[1];
let words = lines[2];

for (let i = 0; i < M; i++) {
  //   let charsToCompare = characters.split(" ");
  let wordsToCompare = words.trim().split(" ");
  let charsToCompare = characters.trim().split(" ");

  let wordToCompare = wordsToCompare[i];

  let arr = [];
  //   INDESXS
  let index = -1;
  let index2 = -1;
  //   console.log(charsToCompare);
  for (let item of charsToCompare) {
    if (item === wordToCompare) {
      index = charsToCompare.indexOf(item, index + 1);
      //   index2 = characters.indexOf(item, index2 + 1);

      if (characters.includes(item)) {
        index2 = characters.indexOf(" " + item + " ", index2 + 1);
        // console.log(index2);
        arr.push(index2);
      }
    }
  }

//   console.log(arr.join(" "));
    let res = arr.join(" ");
    if (res === "") {
      console.log(-1);
    } else {
      console.log(res);
    }
}
