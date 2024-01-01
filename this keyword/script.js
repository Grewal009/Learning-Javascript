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
