'use strict';

import fetch from 'node-fetch';
import { PromisePool } from '@supercharge/promise-pool';

(async function () {
  const users = await fetch('https://jsonplaceholder.typicode.com/users').then(
    res => res.json(),
  );

  const { results } = await PromisePool.withConcurrency(2)
    .for(users)
    .process(async user => {
      return await fetch(
        'https://jsonplaceholder.typicode.com/users/' + user.id,
      ).then(res => res.json());
    });

  console.log(results);
})();
