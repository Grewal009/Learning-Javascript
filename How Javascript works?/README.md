## How Javascript works?

- Javascript is a **Synchronous Single Threaded Language**.
- Everything in Javascript happens inside **Execution Context**.
- When we run a Javascript program an Execution Context is created.

### Execution Context

- Execution Context is created in two phases:
  - Memory creation phase
  - Code execution phase

#### Memory creation phase

- In memory creation phase Javascript allocate memory to all the variables and function in a key/value pair.
- All the variables assigned **undefined** in this phase.
- a : undefined

#### Code execution phase

- In code execution phase whole code is executed one line at a time.
- On line 7 function is invoked (i.e var squareOf2 = square(n);)
- A new Execution Context is created inside **Global Execution Context**.
- Now again this Execution Context is created in two phases i.e Memory Creation Phase and Code Exection Phase.

When the program execution finished. Global Execution Context is also deleted. All the Execution Contexts are managed by **Call Stack**. Call Stack maintains the order of execution of Execution Contexts.
