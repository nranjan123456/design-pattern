const fs = require('fs');

const cache = new Map();

function inconsistentRead(filename, cb) {
  if (cache.has(filename)) cb(cache.get(filename));
  else
    fs.readFile(filename, 'utf8', (err, data) => {
      cache.set(filename, data);
      cb(data);
    });
}

function createFileReader(filename) {
  const listeners = [];
  inconsistentRead(filename, value => {
    listeners.forEach(listener => listener(value));
  });

  return {
    onDataReady: listener => listeners.push(listener),
  };
}

const reader1 = createFileReader(`${__dirname}/data.txt`);
reader1.onDataReady(data => {
  console.log(`First call data: ${data}`);

  const reader2 = createFileReader(`${__dirname}/data.txt`);
  reader2.onDataReady(data => {
    console.log(`Second call data: ${data}`);
  });
});
