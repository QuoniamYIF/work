// function product(num, a) {
//     return num * a;
// }
// apply, call 学习
// function product(a, b) {
//     return this * a * b;
// }

// function double(a, b) {
//     // return product.call(this, a, b);
//     return product.apply(this, [a, b]);
// }

// var a = double.call(3, 3, 3);

// console.log(a);

//  方法可以将一个类数组对象或可遍历对象转换成真正的数组
var a = Array.from({ length: 5 }, () => { return 0 });
// console.log(a);
// console.log(Array.isArray(a))

// console.log(Array.of(10));
// console.log(new Array(10));

// var b = [11, 12, 13, 1].every(isBigEnough);
// console.log(b);

// function isBigEnough(element, index, array) {
//     return (element >= 10)
// }