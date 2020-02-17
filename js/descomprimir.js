const fs = require('fs');
const jsonh = require('./jsonh');

// El archivo 'Corte con compresión JSONH.json' se crea ejecutando en la terminal de comandos:  node comprimir
let compacto = fs.readFileSync('corte20escrutinio.json', 'utf8');
let datos = JSON.parse(compacto);

datos.e = jsonh.unpack(datos.e);
Array.from(datos.e).forEach(e => {
  e.l = jsonh.unpack(e.l);
  Array.from(e.l).forEach(l => {
    l.v = jsonh.unpack(l.v);
  });
  fs.writeFileSync(
    'corte20escrutiniodescomp' + e.id.toString() + '.json',
    JSON.stringify(e.l)
  );
});

// console.log(JSON.stringify(parsed));
console.log(
  'creado/actualizado el archivo "Corte descomprimido con JSONH.json"'
);

fs.writeFileSync('corte20escrutiniodescomp.json', JSON.stringify(datos));
