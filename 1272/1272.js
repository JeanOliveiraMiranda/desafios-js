const input = require("fs").readFileSync("./1272.txt", "utf8");
const lines = input.split("\r\n");

for (let [index, line] of lines.entries()) {
  if (index > 0) {
    line = line.trim();
    let arr = [];
    let strSpace = line.replace(/\s\s+/g, " ");
    let items = strSpace.split(" ");

    for (let [i, item] of items.entries()) {
      let firstLetter = item[0];

      //   TRATAR QUANDO O INDICE DA ARRAY FOR UNDEFINED
      firstLetter === undefined ? (firstLetter = "") : firstLetter;

      //   CONCATENA NO INDICE DA ARRAY O PRIMEIRO VALOR DA LETRA

      arr = arr.concat(firstLetter);
      //   MOMENTO O FOR ESTÁ VENDO A ULTIMA PALAVRA
      if (i + 1 === items.length) {
        console.log(arr.join(""));
      }
    }
  }
}
