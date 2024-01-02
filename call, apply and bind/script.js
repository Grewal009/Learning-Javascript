let name = {
  firstName: "Aneel",
  lastName: "Grewal",
};

// If we want to reuse a method in our code. Then a good way to define it outside object instead of defining it inside object.
let printFullName = function (city, country) {
  console.log(
    this.firstName + " " + this.lastName + " from " + city + ", " + country
  );
};

printFullName.call(name, "Oslo", "Norway");
// using call method we can do function borrowing.
