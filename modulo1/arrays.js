//Primeira maneira de criar uma array
const arr = new Array();
const arr2 = new Array(true, "Ariel", 29, new Array(2, 4, 10));
arr[0] = "Ariel";
arr[1] = 40;
console.log(arr);

console.log(arr2[3][arr2[3].length - 1])// .length mostra a quantidade de items num array



//Segunda maneira de criar uma array = sintaxe literal

const arr3 = ["nome", 40, "id", [3, 5, 9], true];
arr3.push("Ariel Pelegrino");
arr3.push("a", "b", "c");
console.log(arr3);
console.log(arr3[2]);