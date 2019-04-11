# Basics

Basic examples use ES5 syntax. Some helper functions still may use ES6 syntax or even ES6 features. Also, examples are 
rather erroneous than correct! Do not use any of the code provided for other purposes than teaching, especially not for 
production code. Samples can be found [here](samples).

### [Section 1](samples/section-1)
Section 1 gives an overview about basic types in JavaScript, i.e. `Number`, `String`, `Object` ,`Array` and `Boolean`.
Simple properties of each types are observed. Different values are instantiated in different ways and compared against
each other. 

### [Section 2](samples/section-2)
JavaScript way of evaluating Boolean expressions might seem quite odd to newcomers. We will not try to find out which
portions of it are good an which are not. The examples should provide some insight about how booleanification is done.
In some cases, evaluating ["truthy"](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) and 
["falsy"](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) values can even capture semantic meaning, e.g.

```javascript
function timeout (timeout = 0) {
  if (!timeout) { 
    // Do stuff forever
  } else {
    // Stop after some time
  }
}

const notnull = [1, 0, 2, null, 4, 0, 1, null, null].filter(v => !!v)
console.log(notnull.length) // prints 4, where one would expect 6
```

Therefore, understanding truthy and falsy values is important for writing less buggy code. In section 2, we try to
understand what happens and which benefits/pitfalls arise. 

### [Section 3](samples/section-3)
Section 3 is short. Before strict mode or ES6 block scoped variables, one had to be very careful with global variables.
This section shows some examples what could have gone wrong back in the days. Nowadays, global scope, function scope 
and hoisting are much easier to handle. [4.3.1](samples/section-4/4_13_closures-currying.js) introduces one of these bugs.
 
### [Section 4](samples/section-4)
Section 4 covers examples of closures. Since these are examples for beginners, they are not very complex. Only objective
is to introduce the concept of a closure, with the application of currying. Still, without understanding scope, it can
be cumbersome to solve even simple problems. Scope is therefore also part of this section since it is closely related
to closures. 
Note: Closures are not a specific construct of JavaScript.

### [Section 5](samples/section-5)
Previous sections focused on values. The focus of section 5 is a JavaScript programs's asynchronous execution concept.
When coming from "classic" OO languages, understanding asynchronous program flows can be especially challenging. 
Understanding which parts of your (or someone else's) code are running or can be running asynchronously will get you 
started writing code that actually does what you want it to be doing.
 
We start with understanding callbacks. Even though the whole industry (or at least the modern industry) is moving towards
[Promises](https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Promise), callbacks are still
fundamental and Promises are not always supported when using third party libraries. After we understand what callbacks
represent (and what they dont't) and how they are used for asynchronous programming. A basic introduction can be found 
[here](https://nodejs.org/de/docs/guides/blocking-vs-non-blocking). We also show that callbacks must not be asynchronous 
by default. They are just a way to handle asynchronous tasks. We skip the introduction of the "callback hell" because
participants unavoidably will have struggled with it in the past. If you are not familiar with the "callback hell", check
out http://callbackhell.com (yes, they made a domain for it ...).

Sometimes, you want to execute things in-order. Sometimes, you want to execute multiple blocks that need to execute
things in-order while a block's operations are completely decoupled from the operations of other parts of code. The
main purpose of asynchronous programming is to keep the CPU busy, i.e. to utilize resources more efficiently. This was
always somewhat more complicated than needed with callbacks. 

That's where ES6 Promises come into play. We will shortly explain how Promises work and which capabilities they provide. 
If a whole (modern) industry adapts a new concept, there must be some pretty good reasons for it. We also will introduce
some ES6 features that neatly align with Promises, such as Array 
[destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/destructuring_assignment) and the 
[`Promise.all()`](https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) operation. 

We also introduce the ES7 async-await pattern. 

### Happy [coding](excercises)!
