//Funcion que realiza un seguimiento de los nombres de archivo duplicados generandolos con nombres corregidos
function fixFiles(files) {
  const counts = {};
  const result = [];
 // Iterar a traves de cada nombre de archivo dentro del array de entrada files
  for (const file of files) {
    if (file in counts) {
      counts[file]++;
      result.push(`${file}(${counts[file]})`);
    } else {
      counts[file] = 0;
      result.push(file);
    }
  }
  return result;
}

//Ejemplos de uso:
const files = ['photo', 'postcard', 'photo', 'photo', 'video','video'] ;
const fixedFiles = fixFiles(files);
console.log(fixedFiles); // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ['file', 'file', 'file', 'game', 'game'];
const fixedFiles2 = fixFiles(files2);
console.log(fixedFiles2); // ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)'];
const fixedFiles3 = fixFiles(files3);
console.log(fixedFiles3); // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']
