/**
 * Copyright (c) 2014-2018 Zuoyebang, All rights reserved.
 * @fileoverview
 * @author zhangji02 | zhangji02@zuoyebang.com
 * @version 1.0 | 2018-09-12
 */

var arr = [
  {id: 1, type: 1, test: 1},
  {id: 1, type: 1, test: 2},
  {id: 1, type: 1, test: 3},
  {id: 1, type: 1, test: 4},
  {id: 1, type: 1, test: 5},
  {id: 1, type: 2, test: 1},
  {id: 1, type: 2, test: 2},
  {id: 1, type: 2, test: 3},
  {id: 1, type: 2, test: 4},
  {id: 1, type: 2, test: 5},
  {id: 1, type: 3, test: 1},
  {id: 1, type: 3, test: 2},
  {id: 1, type: 3, test: 3},
  {id: 1, type: 3, test: 4},
  {id: 1, type: 3, test: 5},
  {id: 1, type: 4, test: 1},
  {id: 1, type: 4, test: 2},
  {id: 1, type: 4, test: 3},
  {id: 1, type: 4, test: 4},
  {id: 1, type: 4, test: 5},
  {id: 1, type: 5, test: 1},
  {id: 1, type: 5, test: 2},
  {id: 1, type: 5, test: 3},
  {id: 1, type: 5, test: 4},
  {id: 1, type: 5, test: 5},
  {id: 2, type: 1, test: 1},
  {id: 2, type: 1, test: 2},
  {id: 2, type: 1, test: 3},
  {id: 2, type: 1, test: 4},
  {id: 2, type: 1, test: 5},
  {id: 2, type: 2, test: 1},
  {id: 2, type: 2, test: 2},
  {id: 2, type: 2, test: 3},
  {id: 2, type: 2, test: 4},
  {id: 2, type: 2, test: 5},
  {id: 2, type: 3, test: 1},
  {id: 2, type: 3, test: 2},
  {id: 2, type: 3, test: 3},
  {id: 2, type: 3, test: 4},
  {id: 2, type: 3, test: 5},
  {id: 2, type: 4, test: 1},
  {id: 2, type: 4, test: 2},
  {id: 2, type: 4, test: 3},
  {id: 2, type: 4, test: 4},
  {id: 2, type: 4, test: 5},
  {id: 2, type: 5, test: 1},
  {id: 2, type: 5, test: 2},
  {id: 2, type: 5, test: 3},
  {id: 2, type: 5, test: 4},
  {id: 2, type: 5, test: 5},
  {id: 3, type: 1, test: 1},
  {id: 3, type: 1, test: 2},
  {id: 3, type: 1, test: 3},
  {id: 3, type: 1, test: 4},
  {id: 3, type: 1, test: 5},
  {id: 3, type: 2, test: 1},
  {id: 3, type: 2, test: 2},
  {id: 3, type: 2, test: 3},
  {id: 3, type: 2, test: 4},
  {id: 3, type: 2, test: 5},
  {id: 3, type: 3, test: 1},
  {id: 3, type: 3, test: 2},
  {id: 3, type: 3, test: 3},
  {id: 3, type: 3, test: 4},
  {id: 3, type: 3, test: 5},
  {id: 3, type: 4, test: 1},
  {id: 3, type: 4, test: 2},
  {id: 3, type: 4, test: 3},
  {id: 3, type: 4, test: 4},
  {id: 3, type: 4, test: 5},
  {id: 3, type: 5, test: 1},
  {id: 3, type: 5, test: 2},
  {id: 3, type: 5, test: 3},
  {id: 3, type: 5, test: 4},
  {id: 3, type: 5, test: 5},
  {id: 4, type: 1, test: 1},
  {id: 4, type: 1, test: 2},
  {id: 4, type: 1, test: 3},
  {id: 4, type: 1, test: 4},
  {id: 4, type: 1, test: 5},
  {id: 4, type: 2, test: 1},
  {id: 4, type: 2, test: 2},
  {id: 4, type: 2, test: 3},
  {id: 4, type: 2, test: 4},
  {id: 4, type: 2, test: 5},
  {id: 4, type: 3, test: 1},
  {id: 4, type: 3, test: 2},
  {id: 4, type: 3, test: 3},
  {id: 4, type: 3, test: 4},
  {id: 4, type: 3, test: 5},
  {id: 4, type: 4, test: 1},
  {id: 4, type: 4, test: 2},
  {id: 4, type: 4, test: 3},
  {id: 4, type: 4, test: 4},
  {id: 4, type: 4, test: 5},
  {id: 4, type: 5, test: 1},
  {id: 4, type: 5, test: 2},
  {id: 4, type: 5, test: 3},
  {id: 4, type: 5, test: 4},
  {id: 4, type: 5, test: 5},
];

function shuffle(arr) {
  let i = arr.length;
    while (i) {
        let j = Math.floor(Math.random() * i--);
        [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
}

shuffle(arr);
console.log(arr);
var res = arr.sort((a, b) => {
  let temp = (a.id - b.id);
  if (temp === 0) {
    let level2 = (a.type - b.type);
    if (level2 === 0) {
      return a.test - b.test;
    } else {
      return level2;
    }
  }
  return temp;
});

console.log(res);

