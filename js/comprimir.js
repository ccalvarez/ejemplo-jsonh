const fs = require('fs');
const jsonh = require('./jsonh');
let original = fs.readFileSync('un-distrito.json', 'utf8');

let parsed = JSON.parse(original);

// la librería jsonh opera sólo sobre arrays, entonces metí el distrito dentro de un array
Array.from(parsed).forEach(element => {
  // element es en realidad el único elemento de nuestro array (el distrito)

  Array.from(element.j).forEach(j => {
    j.v = jsonh.pack(j.v); // compacta el arreglo de votos de cada junta
  });
  element.j = jsonh.pack(element.j); // compacta la junta
  element.v = jsonh.pack(element.v); // compacta el arreglo de votos del distrito
});

parsed = jsonh.pack(parsed); // compacta los distritos, en este caso sólo tenemos un distrito en el arreglo principal

console.log(JSON.stringify(parsed));
// console.log(parsed);
