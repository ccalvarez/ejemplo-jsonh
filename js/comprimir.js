const fs = require('fs');
const jsonh = require('./jsonh');
let original = fs.readFileSync(
  'Ejemplo de corte sin comprimir con JSONH.json',
  'utf8'
);

let parsed = JSON.parse(original);
// console.log(parsed);
Array.from(parsed.e).forEach(e => {
  Array.from(e.l).forEach(l => {
    l.v = jsonh.pack(l.v);
  });
  e.l = jsonh.pack(e.l);
});
parsed.e = jsonh.pack(parsed.e);

// console.log(JSON.stringify(parsed));
console.log('creado/actualizado el archivo "Corte comprimido con JSONH.json"');

fs.writeFileSync('Corte comprimido con JSONH.json', JSON.stringify(parsed));
// console.log(parsed);
