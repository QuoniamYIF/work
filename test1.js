// function product(num, a) {
//     return num * a;
// }

function product(a, b) {
    return this * a * b;
}

function double(a, b) {
    // return product.call(this, a, b);
    return product.apply(this, [a, b]);
}

var a = double.call(3, 3, 3);

console.log(a);
