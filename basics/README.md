### tl;dr I want to [code](excercises)!

# Basics

Basic examples use ES5 syntax. The further we move, the more ES6 syntax/features can be encountered. Also, examples are 
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
["falsy"](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) values can capture semantic meaning and provide
benefits to code readability.
The snipped below shows a function with a numeric default argument, i.e. the function can be called without providing
a parameters and it will still do its job as intended. In this context, using the default value means that (1) there is
no timeout to be applied and (2) that there also was no timeout value provided (you could still provide the default value
indicating the same intention, i.e. not having timeout).

```javascript
function timeout (timeout = 0) {
  if (!timeout) { 
    // Do stuff forever
  } else {
    // Stop after some time
  }
}
```

You should follow this pattern **if and only if** the Boolean representation of you value has the same meaning in **every
case**. Otherwise, you will end up doing things which will silently break your code. In example below we remember that
null values are falsy. The [`Array.prototype.filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#Parameters)
method expects that the callback function returns either true or false. The [`!!` operator](https://stackoverflow.com/questions/784929/what-is-the-not-not-operator-in-javascript)
can help us converting the items to a ``boolean``. While this example also works without using explicit type conversion,
implicit type conversion should be avoided as much as possible because it makes the intention of the operation unclear
and therefore impairs code readability.

```javascript
const explicit = [1, 'good', 0, 2, null, '', 4, 0, 1, null, null].filter(v => !!v)
const implicit = [1, 'good', 0, 2, null, '', 4, 0, 1, null, null].filter(v => v)
console.log(explicit.length)                      // prints 5, where one would expect 8
console.log(explicit.length === implicit.length)  // prints true
```

As a conclusion, understanding truthy and falsy values is important for writing correct code. In section 2, we try to 
understand what happens to certain values when converting them to `booleans` and which benefits/pitfalls arise. 
[4.3.1](samples/section-4/4_13_closures-currying.js) introduces one of these bugs.

If you think that this is due to some strange JavaScript behavior, check out the [Python](https://docs.python.org/3/library/stdtypes.html#truth-value-testing)
docs on this. Python is equally as good/bad. The notable difference is that in Python, even empty sequences are evaluated to false whereas in JavaScript,
empty objects and arrays are truthy values. 
[Chapter 9 - Type Conversion](https://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf#page=37)
of the historical [ECMA-262](https://www.ecma-international.org/publications/standards/Ecma-262.htm) specification from
1997 has a very detailed explanation on this.

### [Section 3](samples/section-3)
Section 3 is short. Before strict mode or ES6 block scoped variables, one had to be very careful with global variables.
This section shows some examples what could have gone wrong back in the days. Nowadays, global scope, function scope 
and hoisting are much easier to handle. 
 
### [Section 4](samples/section-4)
Section 4 covers examples of closures. Since these are examples for beginners, they are not very complex. Only objective
is to introduce the concept of a closure, with the application of currying. Still, without understanding scope, it can
be cumbersome to solve even simple problems. Scope is therefore also part of this section since it is closely related
to closures (and vice versa).

In this course, OOP is not covered. One of the key applications for closures are private members. The example below
encapsulates the variable `readonly` by "enclosing" it within the constructor function. The method `myMethod` "remembers"
the value it should return. To be more precise, it can access the scope in which it was defined.

```javascript
function MyClass () {
  const readonly = 'value'

  return {
    myMethod: () => readonly
  }
}

const obj = new MyClass()
console.log(obj.myMethod())                     // prints 'value'

```
 
**Note**: Closures are not a specific construct of JavaScript. It is rather a [programming concept](https://en.wikipedia.org/wiki/Closure_(computer_programming).

### [Section 5](samples/section-5)
Previous sections focused on values. The focus of section 5 is a JavaScript programs's asynchronous execution concept.
When coming from "classic" OO languages, understanding asynchronous program flows can be especially challenging. 
Understanding which parts of your (or someone else's) code are running or can be running asynchronously will get you 
started with writing code that actually does what you want it to be doing.
 
We start with understanding callbacks. Even though the whole industry (or at least the modern industry) is moving towards
[Promises](https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Promise), callbacks are still
fundamental and Promises are not always supported, e.g. when using third party libraries or engines that do not implement the latest
features. We try to understand what callbacks represent (and what they don't) and how they are used for asynchronous programming. 
A basic introduction why asynchronous code matters can be found [here](https://nodejs.org/de/docs/guides/blocking-vs-non-blocking). 
We also show that callbacks are note asynchronous by default. They are just a way to handle asynchronous tasks. We skip the introduction of the "callback hell" because
participants unavoidably will have struggled with it in the past. If you are not familiar with the "callback hell", check
out http://callbackhell.com (yes, they made a domain for it ...).

Sometimes, you want to execute things in-order. Sometimes, you want to execute multiple blocks that need to execute
things in-order while a block's operations are completely decoupled from the operations of other blocks. The
main purpose of asynchronous programming is to keep the CPU busy, i.e. to utilize resources efficiently. This was
always somewhat more complicated than needed with callbacks.

That's where ES6 Promises come into play. We will shortly explain how Promises work and which capabilities they provide. 
If a whole (modern) industry adapts a new concept, there must be some pretty good reasons for it. We also will introduce
some ES6 features that neatly align with Promises, such as Array 
[destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/destructuring_assignment) combined with
the [`Promise.all()`](https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) operation. 

We also introduce the ES7 async-await pattern. 

### Happy [coding](excercises)!
