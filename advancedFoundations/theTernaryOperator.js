/*
the falsy values -> false, 0, null, undefined, NaN, ""
everything else is truthy -> "0" (non empty string) , [], {}
*/

// ---- the usual if/else ----
const exerciseTimeMins = 20;
let message='';

if(exerciseTimeMins < 30){
    message = " You need to try harder ";
} else {
    message = " Doing Good ";
}

console.log(message);

// --- refactor as ternary ----

const exerciseTimeMints = 20;
const messag = exerciseTimeMints < 30 ? " you need to try harder!!!" : "Doing Good!!!"
console.log(messag)