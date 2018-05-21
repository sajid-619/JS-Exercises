/* JavaScript code here */
//Task 1
console.log("external JS");

//Task 2
function sumArray (arr) {
    var total = 0;
    arr.forEach (function (value, index) {
        total += value;
        
    });
    return total;
}

console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([19, -2, 30, -45]));