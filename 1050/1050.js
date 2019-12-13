var input = require("fs").readFileSync("./1050.txt", "utf8");
var lines = input.split("\r\n");
let items = [];

// Pega os valores das linhas e manda para a array items
for (let line of lines) {
  items.push(parseFloat(line));
}

const city = {
  61: `Brasilia`,
  71: `Salvador`,
  11: `Sao Paulo`,
  21: `Rio de Janeiro`,
  32: `Juiz de Fora`,
  19: `Campinas`,
  27: `Vitoria`,
  31: `Belo Horizonte`
};

const getCity = ddd => {
  if (city[ddd]) {
    return console.log(city[ddd]);
  } else {
    return console.log(`DDD nao cadastrado`);
  }
};

getCity(items[0]);
