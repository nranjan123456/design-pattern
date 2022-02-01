import * as fs from 'fs';
import { mockEnable, mockDisable } from './mock-read-file';

mockEnable(Buffer.from('Hello World'));

fs.readFile('fake-path', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(data.toString());
});

mockDisable();
