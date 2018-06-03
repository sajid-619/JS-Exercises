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

//Task 4
var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];
function getReadingStatus(index) {
    return library[index].readingStatus;
}

console.log(getReadingStatus(2));

// Task 5 a
var cart = [ 
   {
       name: 'Shoes',
       price: 560,
       quantity: 4
   },
   {
       name: 'Regular Tees',
       price: 455.50,
       quantity: 6
   },
   {
       name: 'Socks',
       price: 65.99,
       quantity: 2
   }];
function addItem (newItem) {
    cart.push(newItem);
    console.log(cart);
}
var newItem = {name: "Watch", price: 64, quantity: 1};
addItem(newItem);

// Task 5 b
console.log(cart.sort(function(a, b){return a.quantity - b.quantity}));
// Task 5c

function findByName (givenName) {
    var x = [];
    for  (var i = 0; i < cart.length; i++) {
            if (cart[i].name === givenName) {
               x.push("{name: " + cart[i].name + ", " + " price: " + cart[i].price + ", " + " quantity : " + cart[i].quantity + "}");
        }
    }
    return x;
}
console.log(findByName("Watch"));

// Task 5 d
function ttlBill () {
    var totalBill = 0;
    for  (var i = 0; i < cart.length; i++) {
        totalBill += cart[i].quantity * cart[i].price;
    }
    return totalBill;
    
}
console.log(ttlBill());
