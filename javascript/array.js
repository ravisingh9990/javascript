// arrays are collection of objects, an array comes in to play to remove the extra efforts by creating so many variables
// by using an array we can store multiple data into a single variable


// the old way of declaring an array

var states = ["mumbai", "delhi", "gujrat", "goa"];


// new and usually used way of declaring an array 

var countries = new Array ("India", "Japan", "Russia", "France");

// how to access the array

console.log(countries);

//it's printing the array like this, [ 'India', 'Japan', 'Russia', 'France' ]

// accessing a single element of an array
console.log(countries[0]);

// here it is printing 'India' because India is the value at the 0th place because arrays starts from 0

// finding the length of an array
console.log(countries.length);

// replacing value from the array

countries[1] = "SriLanka";

console.log(countries);

var user = ["Ravi", "ravi@mail.com", 3, 34, true];
console.log(user);

user.Pop();
user.Pop();
console.log(user);
user.unshift("NEW VALUE");
console.log(user);