// this in strict mode

/* "use strict";
console.log(this); //window object
function print() {
  console.log(this); //undefined
}
print(); */

// this in non-strict mode

/* console.log(this); //window object
function print() {
  console.log(this); //window object
}
print();
 */

// In function this depends on how function is called.
/* 
("use strict");
console.log(this); //window object
function print() {
  console.log(this); //window object because called using window object
}
window.print();
 */

// this inside a object's method

const obj = {
  a: 10,
  x: function () {
    console.log(this); //obj object
  },
};

obj.x();

const obj1 = {
  a: 10,
  x: () => {
    console.log(this); //window object because of enclosing lexical scope
  },
};

obj1.x();

const obj2 = {
  a: 10,
  x: function () {
    y = () => {
      console.log(this); //enclosing lexical scope i.e obj1 object
    };
    y();
  },
};

obj2.x();
