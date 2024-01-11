## Hoisting in Javascript

- Hoisting is a phenomena in Javascript by which we can access variables and functions in our code even before initialization.
- This happens because of Exexution Context.
- Execution Context consists of two phases: memory creation phase and code execution phase.
- In memory creation phase: memory is allocated to all variables and functions.
- In code executon phase: whole javascript code is executed one line at a time.
- If we use arror function in place of normal function. If we access it before initialization. It is considered as nornal variable and return undefined. If we access it after initialization then it will work as normal function.

In other programming languages it is an error because we can't access variables and functions before initialization.
