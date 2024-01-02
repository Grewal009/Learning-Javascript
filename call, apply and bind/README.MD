## call(), apply() and bind()

call(), apply() and bind() methods are used for function borrowing.
Insted of defining a function inside object we will define it outside object so that we can reuse it.

### call()

- first argument to call() method is reference to this.
- later arguments are the arguments to function separeted by comma.

### apply()

- apply() method is similar to call() method but the only difference is that
- In apply() first we specify reference to this and later we specify an array that contains all the arguments to function.

### bind()

- bind() method is similar to call() method.
- Only difference is that instead of immediately calling the printFullName(). It will bind the printFullName() with name object and return a copy of it so that we can call it later.
