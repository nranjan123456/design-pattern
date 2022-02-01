const events = require('events');
const fs = require('fs');

function findRegex(files, regex) {
  const emitter = new events.EventEmitter();
  for (const file of files) {
    fs.readFile(file, 'utf8', (err, content) => {
      if (err) return emitter.emit('error', err);

      emitter.emit('fileread', file);
      const match = content.match(regex);
      if (match) match.forEach(elem => emitter.emit('found', file, elem));
    });
  }
  return emitter;
}

findRegex([`${__dirname}/fileA.txt`, `${__dirname}/fileB.json`], /hello \w+/g)
  .on('fileread', file => console.log(`${file} was read`))
  .on('found', (file, match) => console.log(`Matched "${match}" in ${file}`))
  .on('error', err => console.error(`Error emitted ${err.message}`));
