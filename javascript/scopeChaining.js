var username = "Ravi";

console.log("Line number 3", username);

function sayhello() {
  // we haven't defined any variable with the name, username, inside this function, so it is accessing the variable from outside the function
  // within the function you can access the variable declared outside the function but you can't access inside declared variable, from outside the function

  console.log("Line number 10", username);

  sayhello2();
  function sayhello2() {
    console.log("Line number 15", username);
  }
}

sayhello();


// output of the above code is "Ravi", as all the functions are accessing the variable from the global scope
// if we create separate variables for each of the functions individially, they will output the values of their own variables that are declared within the function