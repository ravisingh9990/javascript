// let's run the below code to find out what are global context holds, 
console.log(this);
// it's printing {} the empty scope but it's will not always be the case because we are using the node here 
// if we run this code in the browser's console, it will print the global context which is window, at it is having so many properties


var game = "basketball";

function sayName(){
    var name = "Ravi";
    console.log(this);
}

sayName();

// it's showing very complex when running in node
// but in the browser's console it again showing window object regardless of what is my scope and what is not my scope

var game = "basketball";

var sayName = function (){
    var name = "Ravi";
    console.log(this);
}

sayName();

// in the above code we have stored the function inside a variable and again it's showing the same window object 
// but in theory it's completely different thing but it's giving the same output

// in conclusion, we can say that we have a this keyword which gives us an access to the global context 
// and global context differs in the situation in the case of node it gives me empty scope {}, 
// in the case of the browser it gives me the window object