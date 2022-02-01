'use strict';
Object.defineProperty(exports, '__esModule', { value: true });

import { readFile } from 'fs';

function readJSON(filename, callback) {
  readFile(filename, 'utf8', (err, data) => {
    let parsed;
    if (err) return callback(err);

    try {
      parsed = JSON.parse(data);
    } catch (err) {
      return callback(err);
    }

    callback(null, parsed);
  });
}

const cb = (err, data) => {
  if (err) return console.error(err);

  console.log(data);
};

readJSON(`${__dirname}/valid_json.json`, cb);
readJSON(`${__dirname}/invalid_json.json`, cb);
