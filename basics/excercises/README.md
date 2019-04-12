# Exercises

This exercises are based on a simple REST API. The backend uses a static "database" (i.e. a JSON file). The API
should be used to query and process information about customers/users/or whatever business model you want to imagine.

The server code uses inline logic in routes for simplicity reasons. I would not recommend doing this in production
since this code will not be reusable in any way. Tests can also be seen as possible solution to tasks. They are not always implemented in
the most efficient manner (e.g. map/filter chaining) to keep code understandable for beginners. It is sufficient for these simple base cases 
since the dataset is very small. 

Not every subtask can be directly solved via coding. Sometimes, you also need to analyze the response dataset to gain more insight. 
The answer should never be found by analyzing the whole dataset. Like you would not analyze a billion records in a database.

Hints provide either helpful methods that were not covered much so far or an explanation how the task could be solved. 
As always with programming, there is an unlimited set of solutions and you are encouraged to find your own! Most of these
exercises wont't help you solve real-world problems but they should provide a good start since certain patterns remain
even in production code.

## Task 0
- run `npm i` to install dependencies
- run `npm start` to start the API server
- go to http://localhost:3000/api/doc and check out the documentation
- create a *.js file and import the simplified HTTP client based on [Axios](https://github.com/axios/axios),
it is already set up with the localhost address so you only have to care about addressing the API
- go to Task 1 and try to solve it :)
- possible solutions are provided in test files, try to avoid cheating as much as possible :)
- the server saves your state to a file under [util](../util), just delete it if you want to start from scratch 

<details><summary>How do I use the HTTP client provided?</summary>

<span>Your response object will look like <a href="https://github.com/axios/axios#response-schema">this</a>.</span>
```javascript
const { http } = require('../util/util') // ensure that your relative path is correct

// note that this execution does not wait for your HTTP call to finish
http.get('/api/users')
    .then(response => {
      // Do something with the response  
    })
    .catch(error => {
      // Handle the error
    })

// if you want to use async-await ensure that you are in an async function
// a rejection here will crash your code while the above call does not
// how does that relate to the manner in which the code is executed?
const response = await http.get('/api/users')     
```

</details>

## Task 1
1. How many users are in the database?
2. How many active users are in the database?

<details><summary>Hints Task 1</summary>
<p>

```javascript
Array.prototype.filter()      // can be used to find elements matching a condition
```

</p>
</details>

## Task 2
1. When was the first user registered?
2. What is the average age of a database user?
3. Who works for the company "GEOFARM"? Use their email address as output.

<details><summary>Hints Task 2</summary>
<p>

```javascript
Date.parse()                  // returns a number
Math.floor() || Math.ceil()   // use it remove fractional digits
Math.min()                    // can be used to find the smallest value in a collection, 
                              // it does not accept an array, though! lookup what the ES6 spread operator does
Array.prototype.sort()        // consider using .sort() for sorting numbers
Date.prototype.toISOString()  // converts a numeric date to a date string
```

</p>
</details>

## Task 3
1. How many email domains does the company "ZILLACON" use? Can you do it using one call chain only?
2. Who were the first 3 users to be registered? List their full names, i.e. first name and last name in one single string.
3. Whats the average balance of a database user?
4. At an event, you met a pretty wealthy person who promised to help you starting your business. :beers:, :cocktail:, :tropical_drink: and :wine_glass:
made you forget his name the day after, though. Maybe he did register too?

<details><summary>Hints Task 3</summary>
<p>
The balance is a string in the dataset! Use your knowledge about type conversions to deal with this.
 
```javascript
String.prototype.split()      // just as in any other language
Array.prototype.pop()         // removes and returns the last element of an array 
Array.prototype.map()         // transforms a sequence into another sequence
Array.prototype.sort()        // consider using .sort() for sorting objects
Array.prototype.slice()       // get a portion of an array
```

</p>
</details>

## Task 4
1. The dataset contains duplicate users. Find a way to locate them! If you work with locating duplicate IDs, query their names via the API.
2. How many people work for "EGYPTO"? Who do you think is the intern? Why?
3. Recall Task 2.3. This time, people randomly ask you about a company and certain properties of their employees.
For example, they might want their ages and registration date, or just their balance. Asking for their name is illegal and forbidden. Also, 
one cannot ask for data that is not present in the database. You can use the in-memory dataset or implement a new API endpoint for this case
if you want to write some backend code.
4. What needs to be changed if someone wants to have information not related to a particular company? Do you think it is a good idea to keep
a "company" parameter for analyzing the dataset in such a way? Why, why not? 

<details><summary>Hints Task 4</summary>

<ol>
    <li>If you have the IDs, try using the Promise.all() operation to query all users asynchronously. What are the limitations with this?</li>
    <li>Once you get the response, you might see the solution by looking at the data set.</li>
    <li>Try using .map, .filter and .reduce. No more hints. :)</li>
    <li>
        It is a good programming pattern to use functions that do exactly one thing at a time. A function that statically 
        filters by the "company" property and then extracts some more properties from the filtered list is not very reusable. 
        Try to decouple the filtering from the property data extraction.
    </li>
</ol>

</details>

## Task 5
Porter Beasley, Allison Duffy and people they know meet for lunch. Find a way to update the database without conflicts.
Try to optimize the number of requests sent to the server since this operation is <b>VERY SLOW</b>. How fast can you get?

**HINT:**
```javascript
console.time("label")
// Do stuff
console.timeEnd("label")
```
is an easy way to quickly debug time consumption of operations without the need of computing timestamps.
    
<details><summary>Hints Task 5</summary>
<p>
Both share a subset of known people. Blindly updating the database will fail. Also, trying to add every new person one by one
will take forever. You can diff both lists using .filter, which will be the fastest solution in this case. The be as fast as
possible, diffs should be sent using Promise.all().
</p>
</details>    
