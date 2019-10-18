// ==== Callbacks ====

/* Step 1: Create a higher-order function
 * Create a higher-order function named consume with 3 parameters: a, b and cb
 * The first two parameters can take any argument (we can pass any value as argument)
 * The last parameter accepts a callback
 * The consume function should return the invocation of cb, passing a and b into cb as arguments
 */
function consume(a, b, cb) {
  return cb(a, b);
}

/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */
const add = function(num1, num2) {
  return num1 + num2;
};

const multiply = function(num1, num2) {
  return num1 * num2;
};

const greeting = function(firstName, lastName) {
  return `Hello ${firstName} ${lastName} nice to meet you!`;
};

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume('Mary', 'Poppins', greeting)); // Hello Mary Poppins, nice to meet you!

// ==== Closures ====

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation:
/* Because of how function scope works when a function comiples in JavaScript.
It makes the 1st pass lokking for reference if it does not find the function in the local scope it will look outside the scope to find the reference.
So even though the var for interneral is in the function scope of myFunction.
nested fucntion is able to look outsitde its scope into the parent scope for refference. 
i.e. The complier makes the 1st pass it looks for the refference to var internal inside nestedFunction. When it does not find it the complier goes outside the scope to see if the next scope has a refference to it. 
So when the compiler makes a 2nd pass it is able to link the refference of the var to the function calling it and is still able to dispaly the correct output.
The same goes for myFunction when it can't find a refference to the var external it looks outside of the scope function to find the refference and when found runs the function with the expect output.
*/

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();
