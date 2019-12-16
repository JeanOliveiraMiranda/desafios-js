const input = require("fs").readFileSync("./1160.txt", "utf8");
const lines = input.split("\r\n");

lines.forEach((line, index) => {
  if (index > 0) {
    let p1, p2;
    let g1, g2;
    let items = line.split(" ");
    let anos = 0;
    let sec = 0;

    //   items
    p1 = parseFloat(items[0]);
    p2 = parseFloat(items[1]);
    g1 = parseFloat(items[2]);
    g2 = parseFloat(items[3]);

    while (p1 <= p2) {
      p1 += Math.round((p1 * g1) / 100);
      p2 += Math.round((p2 * g2) / 100);

      anos++;

      if (anos > 100) {
        sec = 1;
        break;
      }
    }

    if (sec === 0) {
      console.log(anos + " anos.");
    } else {
      console.log("Mais de 1 seculo.");
    }
  }
});
