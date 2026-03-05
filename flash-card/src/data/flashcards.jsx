const flashcards = [
  {
    question: "What is JavaScript?",
    answer: "JavaScript is a programming language used to create dynamic web pages."
  },
  {
    question: "What is the DOM?",
    answer: "DOM stands for Document Object Model."
  },
  {
    question: "What is a closure?",
    answer: "A closure is a function that remembers variables from its outer scope."
  },
  {
    question: "What is the difference between var, let, and const?",
    answer:
      "var is function-scoped and can be redeclared. let and const are block-scoped. let allows reassignment while const does not."
  },
  {
    question: "What is a promise in JavaScript?",
    answer: "A Promise represents a value that may be available now, later, or never, and it supports chaining with then/catch/finally."
  },
  {
    question: "What does async/await do?",
    answer: "async/await is syntax on top of promises that lets you write asynchronous code that reads like synchronous code."
  },
  {
    question: "What is the event loop?",
    answer: "The event loop coordinates the call stack and task queues so JavaScript can handle async callbacks without blocking."
  },
  {
    question: "What is hoisting?",
    answer: "Hoisting is JavaScript's behavior of moving declarations to the top of their scope; function declarations are hoisted fully, while let/const are hoisted but uninitialized (TDZ)."
  },
  {
    question: "What is the temporal dead zone (TDZ)?",
    answer: "The TDZ is the period between entering a block and a let/const declaration being initialized; accessing the variable there throws an error."
  },
  {
    question: "What is the difference between == and ===?",
    answer: "== performs type coercion before comparison; === compares both type and value without coercion."
  },
  {
    question: "What is a callback function?",
    answer: "A callback is a function passed as an argument to another function, to be called later (often after an async operation)."
  },
  {
    question: "What is an arrow function and how is it different?",
    answer: "Arrow functions are a shorter syntax and they don't have their own this/arguments; they capture this from the surrounding scope."
  },
  {
    question: "What is 'this' in JavaScript?",
    answer: "this refers to the calling context; its value depends on how a function is called (method call, constructor, bind/call/apply, etc.)."
  },
  {
    question: "What is prototypal inheritance?",
    answer: "Objects can inherit from other objects via the prototype chain, allowing shared properties and methods."
  },
  {
    question: "What does Array.prototype.map do?",
    answer: "map creates a new array by transforming each element with a callback function; it does not mutate the original array."
  },
  {
    question: "What is destructuring?",
    answer: "Destructuring is syntax for unpacking values from arrays or properties from objects into distinct variables."
  },
  {
    question: "What are template literals?",
    answer: "Template literals use backticks and support interpolation with ${...} plus multi-line strings."
  },
  {
    question: "What is a module in JavaScript?",
    answer: "A module is a file with its own scope that can export/import values using ES module syntax (export/import)."
  },
  {
    question: "What is JSON?",
    answer: "JSON (JavaScript Object Notation) is a text format for structured data; in JS you commonly use JSON.stringify and JSON.parse."
  },
  {
    question: "What is debouncing?",
    answer: "Debouncing delays a function call until a certain time has passed without new events, useful for search inputs and resize handlers."
  },
];

export default flashcards;