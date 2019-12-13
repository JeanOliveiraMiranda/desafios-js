const input = require("fs").readFileSync("./1160.txt", "utf8");
const lines = input.split("\r\n");

let p1, p2;
let g1, g2;

for (let [index, line] of lines.entries()) {
  if (index > 0) {
    let items = line.split(" ");
    let anos = 0;
    let sec = 0;

    //   items
    p1 = items[0];
    p2 = items[1];
    g1 = items[2];
    g2 = items[3];

    console.log(p1)
    while (p1 <= p2) {
      p1 += (p1 * g1) / 100;
      p2 += (p2 * g2) / 100;
      anos++;

      if (anos > 100) {
        sec = 1;
        break;
      }
    }

    // console.log(anos);
  }
}
