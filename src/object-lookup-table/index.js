'use strict';

function getUserType(type) {
  const USER_TYPE = {
    ADMIN: '관리자',
    INSTRUCTOR: '강사',
    STUDENT: '수강생',
  };

  return USER_TYPE[type] || '해당 없음';
}

console.log(getUserType('ADMIN'));

const getUserType2 = type => {
  const USER_TYPE = {
    ADMIN: '관리자',
    INSTRUCTOR: '강사',
    STUDENT: '수강생',
  };

  return USER_TYPE[type] || '해당 없음';
};

const getUserType3 = type => {
  const USER_TYPE = {
    ADMIN: '관리자',
    INSTRUCTOR: '강사',
    STUDENT: '수강생',
  };

  return USER_TYPE[type] || '해당 없음';
};

console.log(getUserType2('ADMIN'));
console.log(getUserType3('STUDENT'));
