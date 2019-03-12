let m = 6, n = 2;
let a = [];
for (var i = 0; i < m; i++) {
  a.push(i + 1);
}

function cmn(a, n, str) {
  if (n === 1) {
    for (var i = 0; i < a.length; i++) {
      console.log(str + a[i]);
    }
  } else {
    for (var i = 0; i < a.length - n + 1; i++) {
      cmn(a.slice(i + 1), n-1, str + a[i]);
    }
  }
}