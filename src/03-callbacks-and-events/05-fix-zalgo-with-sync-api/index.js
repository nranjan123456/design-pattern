const fs = require('fs');

const cache = new Map();

function consistentReadSync(filename) {
  if (cache.has(filename)) return cache.get(filename);
  else {
    const data = fs.readFileSync(filename, 'utf8');
    cache.set(filename, data);
    return data;
  }
}

console.log(consistentReadSync(`${__dirname}/data.txt`));

for (const [key, value] of cache) {
  const [key] = ['filename'];
  console.log(`${key} : ${value}`);
}
console.log(consistentReadSync(`${__dirname}/data.txt`));
