const input = require("fs").readFileSync("./1140.txt", "utf8");

const lines = input.split("\r\n");
let isTatougrama = true;

const verificarTatougrama = item => {
  if (item) {
    console.log("Y");
  } else {
    console.log("N");
  }
};

for (let [index, line] of lines.entries()) {
  const arrStrings = [];
  // Split separa em um index específico na array cada palavra
  const item = line.split(" ");

  //   Loop dentro de cada palavra pegando somente a primeira letra
  for (let palavra of item) {
    const stringUpper = palavra[0].toUpperCase();
    arrStrings.push(stringUpper);
  }

  for (let [i, str] of arrStrings.entries()) {
    // VERIFICAR STRING COM A ANTERIOR
    if (i > 0) {
      const prev = arrStrings[i - 1];

      if (isTatougrama === true) {
        if (str !== prev) {
          isTatougrama = false;
        } else if (str === prev) {
          isTatougrama = true;
        }
      }

      // VERIFICAR ULTIMO INDEX DO ARRAY
      if (i === arrStrings.length - 1) {
        // console.log(i, str);
        verificarTatougrama(isTatougrama);
      }
      // VERIFICAR ULTIMO CARACTER
      else if (index + 1 === lines.length) {
        verificarTatougrama(false);
      }
    }
  }
}
