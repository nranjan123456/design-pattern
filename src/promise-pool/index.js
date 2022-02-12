import { PromisePool } from '@supercharge/promise-pool';

export const multiply = async () => {
  const numbers = [1, 2, 3, 4];

  const { results } = await PromisePool.withConcurrency(10)
    .for(numbers)
    .process(async num => {
      return num * 2;
    });

  return results;
};

multiply().then(result => {
  console.log(result);
});

export const getUsers = async () => {
  const users = [{ name: 'Marcus' }, { name: 'Norman' }, { name: 'Christian' }];

  const { results } = await PromisePool.for(users)
    .withConcurrency(2)
    .process(async user => {
      return `${user.name}님이 접속하였습니다`;
    });

  return results;
};

getUsers().then(result => {
  console.log(result);
});

export const logoutUsers = async () => {
  const errors = [];
  const users = [{ name: 'Marcus' }, { name: 'Norman' }, { name: 'Christian' }];

  const { results } = await PromisePool.for(users)
    .withConcurrency(1)
    .handleError(async (error, user) => {
      if (error instanceof ValidationError) {
        return errors.push(error);
      }
    })
    .process(async user => {
      return `${user.name}님이 로그아웃하였습니다.`;
    });

  return results;
};

logoutUsers().then(result => {
  console.log(result);
});

export const stopPool = async () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7];

  const { results } = await PromisePool.for(numbers).process(
    async (number, index, pool) => {
      if (index > 100) {
        return pool.stop();
      }
    },
  );

  return results;

  // const { results }
};
