function sayhello(name){
    console.log("Hello there, ravi");
    //console.log("Hello there,".name);

  console.log(`Hello there, ${name}. how are you`);
}

// sayhello("Ravi");
// sayhello("lakshay");

function namastay(){
  return "welcome in India";
}
var greetings = namastay();
console.log(greetings);

// referencing a function and calling a function 

namastay() // calling a function
namastay // referencing a function 

// ------------------------------------------------------------------------------------------------ //
/* 
Define a function that can answer the role of a user. 
A user can be on the following roles:
admin - with access to create/delete courses
testprep - with access to create/delete tests
user - consume all content 
other - trial user. 

Input: getUserRole(name, role)

*/

function getUserRole(name, role){
  switch (role) {
      case "admin":
          return `${name} is admin with all access`;
          break; // this is not neccessary 

      case "sub-admin":
          return `${name} is sub-admin with access to create and delete courses`; 
          break; // this is not neccessary 

      case "testprep":
          return `${name} is a test prep with access to create and delete test`; 
          break; // this is not neccessary 

      case "user":
          return `${name} is a test prep with access to consume all content`;
          break; // this is not neccessary 
  
      default:
          return `${name} is a trial user`;
          break; // this is not neccessary 
  }
}

// getUserRole("Ravi", "sub-admin"); // it will do nothing because we are using return so it gives you just a value bag, nothing else

console.log(getUserRole("Ravi", "sub-admin"));

var getRole = getUserRole("Sammy", "testprep");
console.log(getRole);

/*you can have a function inside just a variable, in above code we are creating a function with same name
 as the function and removing the function name, 
 nothing is gonna change in the usecase of the function */

 var getUserRole = function (name, role){
  switch (role) {
      case "admin":
          return `${name} is admin with all access`;
          break; // this is not neccessary 

      case "sub-admin":
          return `${name} is sub-admin with access to create and delete courses`; 
          break; // this is not neccessary 

      case "testprep":
          return `${name} is a test prep with access to create and delete test`; 
          break; // this is not neccessary 

      case "user":
          return `${name} is a user with access to consume all content`;
          break; // this is not neccessary 
  
      default:
          return `${name} is a trial user`;
          break; // this is not neccessary 
  }
}

console.log(getUserRole("Mohit", "user"));


// function declarations are scanned and made availabe 
// it means you can call the function above, where you have created your function because the global context scans and make it available.

// variable declarations are scanned and made undefined
// If we check the data type of the variable that is storing a function like the above code from line number 11 to 15, it will return undefined.