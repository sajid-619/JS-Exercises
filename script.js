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

// Task 3
function checkEmail (emailString) {
    var emailFormat = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    var match = emailFormat.test(emailString);
    return match;
}

console.log(checkEmail("zsajid014@smith.com"));
console.log(checkEmail("zsajid014smith.info"));