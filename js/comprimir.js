const fs = require('fs');
const jsonh = require('./jsonh');
let original = fs.readFileSync('municipal-2016-sin-juntas.json', 'utf8');

let parsed = JSON.parse(original);

Array.from(parsed.e).forEach(e => {
  Array.from(e.l).forEach(l => {
    l.v = jsonh.pack(l.v);
  });
  e.l = jsonh.pack(e.l);
});
parsed.e = jsonh.pack(parsed.e);

// console.log(JSON.stringify(parsed));
console.log(
  'creado/actualizado el archivo municipal-2020-sin-juntas-compacto.json'
);

fs.writeFileSync(
  'municipal-2016-sin-juntas-compacto.json',
  JSON.stringify(parsed)
);
// console.log(parsed);
