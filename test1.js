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

// console.log([1, 3, 2, 3, 2].sort())

// var invertTree = function(root) {
//     if (root === null) return null;
//     var temp = root.left;
//     root.left = invertTree(root.right);
//     root.right = invertTree(temp);
//     return root;
// };

// var invertTree = function(root) {
//     if (root === null) return;
//     // swap left and right child
//     var temp = root.left;
//     root.left = root.right;
//     root.right = temp;
//     // recurse into children
//     invertTree(root.left);
//     invertTree(root.right);
// };

// var intersection = function(nums1, nums2) {
//     // for (var i = 0, j = 0;i < nums.length;)

// };

var validateSearchTree = function(tree) {
    
}