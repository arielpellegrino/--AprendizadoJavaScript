//Para converter String em numero
// parseFloat, parseInt, Number
let n1 = 10;
let n2 = "2";
let n3 = 5.54545456;
let n4 = "14aaaaaa";
let n5 = "aaaaa14"



n2 = parseInt(n2);
n3 = parseFloat(n3);
n4 = parseInt(n4);
n5 = parseInt(n5);

console.log(n1 + n2, typeof n1, typeof n2, n3, typeof n3, n4, typeof n4, n5, typeof n5);

//Para converter numero para String
// parseFloat, parseInt, Number

t2 = 10;
t2 = t2 + "";
console.log(t2, typeof t2);