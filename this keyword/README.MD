###this keyword###

A function's this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode.

In most cases, the value of this is determined by how a function is called (runtime binding). It can't be set by assignment during execution, and it may be different each time the function is called. The Function.prototype.bind() method can set the value of a function's this regardless of how it's called, and arrow functions don't provide their own this binding (it retains the this value of the enclosing lexical context).

- value of this depends on strict and non-strict mode.
- In non-strict mode. If the value of this is null or undefined. Then value of this is replaced with global object i.e window in case of browser.
- In strict mode, value of this inside function depends on how function is called.
- Arrow functions doesn't provide their own this binding. (It retains the this value of the enclosing lexical context)
- this inside DOM element - refers to HTMLElement.
