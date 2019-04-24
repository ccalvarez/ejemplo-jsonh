const fs = require('fs');
const jsonh = require('./jsonh');
let compacto = fs.readFileSync('municipal-2016-sin-juntas-compacto.json', 'utf8');
let datos = JSON.parse(compacto);


datos.e = jsonh.unpack(datos.e);
Array.from(datos.e).forEach(e => {
	e.l = jsonh.unpack(e.l)
	Array.from(e.l).forEach(l => {
		l.v = jsonh.unpack(l.v);
	});
});

// console.log(JSON.stringify(parsed));
console.log(
  'creado/actualizado el archivo municipal-2020-sin-juntas-descomprimido.json'
);

fs.writeFileSync(
  'municipal-2016-sin-juntas-descomprimido.json',
  JSON.stringify(datos)
);

