//declara função (function hoisting) = 
function falaOi() {
    console.log("oi");
}
const falaTchau = function() {
    console.log('tchau');
}

const falaTa = () => {
    console.log('Ta');
}
// falaOi();
// falaTchau();
// falaTa();

function mathTest(add, sub, multi) {
    const add = 2 + 2; // 4
    const sub = 3 - 2 //  1
    const multi = 2 * 3 // 6
}

mathTest(add, sub, multi)