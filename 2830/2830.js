var input = require("fs").readFileSync("./2830.txt", "utf8");
var lines = input.split("\r\n");

let mestreKung = lines[0];
let mestreLu = lines[1];

if (Math.trunc((mestreLu - 1) / 2) == Math.trunc((mestreKung - 1) / 2)) {
  console.log("oitavas");
} else if (Math.trunc((mestreLu - 1) / 4) == Math.trunc((mestreKung - 1) / 4))
  console.log("quartas");
else if (Math.trunc((mestreLu - 1) / 8) == Math.trunc((mestreKung - 1) / 8))
  console.log("semifinal");
else console.log("final");
