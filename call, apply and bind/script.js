let name = {
  firstName: "Aneel",
  lastName: "Grewal",
};

// If we want to reuse a method in our code. Then a good way to define it outside object instead of defining it inside object.
let printFullName = function (city, country) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " from " +
      city +
      ", " +
      country +
      "."
  );
};

// using call method we can do function borrowing.
printFullName.call(name, "Oslo", "Norway"); //Aneel Grewal from Oslo, Norway.

// apply() method is similar to call() method but the only difference is that

/* In call() first we specify reference to this and later we specify arguments to method separated by comma.
But in apply() first we specify reference to this and later we specify an array that contains all the arguments to function.
 */
printFullName.apply(name, ["Oslo", "Norway"]); //Aneel Grewal from Oslo, Norway.

// bind() method
/* 
bind() method is similar to call() method.
Only difference is that instead of immediately calling the printFullName(). It will bind the printFullName() with name object and return a copy of it so that we can call it later. 
 */
let printMyName = printFullName.bind(name, "Oslo", "Norway");
console.log(printMyName); //log printFullNAme fn
printMyName(); // Aneel Grewal from Oslo, Norway.
