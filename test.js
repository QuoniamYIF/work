"use strict"

let expression = "pow(((c+f)+e),y)"

let returnV = [{
    "c": 1
}, {
    "f": 1
}, {
    "e": 2
}, {
    "y": 1 / 2
}]

let Reg

let ex1 = expression
    .replace(/pow/g, "Math.pow")
    // .replace(/random/g, "Math.random")

var that = global;

returnV.forEach(function(v, k) {
    // console.log(k);
    // console.log(v);
    Object.assign(that, v);
});



// console.log(c);

// for (let i = 0; i < returnV.length; i++) {
//     let item = returnV[i]
//     let key = Object.keys(item)

//     Reg = new RegExp(key, 'g')
//     ex1 = ex1.replace(Reg, returnV[i][key])
// }

console.log(eval(ex1))

// var a = 1;

// var ex2 = "Math.pow(a, 2)";

// console.log(eval(ex2));

// console.log(Math.pow(add(add(1, 1), 1), 2));

// var ex2 = 

// console.log(eval(ex2));

// var z = "Math.add(2,3)";

// console.log(eval(z));

// function add(a, b) {
//     return (a + b)
// }