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
it is already set up with the localhost address so you only have to care about addressing the API,
your response will look like [this](https://github.com/axios/axios#response-schema)
- go to Task 1 and try to solve it :)
- possible solutions are provided in test files, try to avoid cheating as much as possible :) 

<details><summary>How do I use the HTTP client provided?</summary>
<p>

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

const response = await http.get('/api/users') // if you want to use async-await ensure that you are in an async function    
```

</p>
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
Array.prototype.sort()        // consider using .sort() for sorting numbers
Date.parse()                  // returns a number
Math.floor() || Math.ceil()   // use it remove fractional digits
Date.prototype.toISOString()  // converts a numeric date to a date string
Math.min()                    // can be used to find the smallest value in a collection, 
                              // it does not accept an array, though! lookup what the ES6 spread operator does
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

The balance is of type `string` in the dataset! Use your knowledge about type conversions to deal with this. 

```javascript
Array.prototype.pop()         // removes and returns the last element of an array 
Array.prototype.map()         // transforms a sequence into another sequence
Array.prototype.sort()        // consider using .sort() for sorting objects
String.prototype.split()      // just as in any other language
String.prototype.slice()      // get a portion of an array
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
<p>
Write a function that takes two parameters. The first one specifies the company which the data should be about. The second
could be an array of properties to extract. Try to chain .filter, .map and .reduce methods.

Or use any other implementation.

</p>
</details>

## Task 5
1. Output a list of entries.  
    1. Each entry consists of the names of two people knowing each other.
    2. Using Array notation, entries `[a, b]` and `[b, a]` are considered to be duplicates. We don't want them. Think of a
    undirected graph but don't implement one (or do if these tasks are way tooo boring :neckbeard:)!
    3. How many people know each other? 
    4. What does your data structure look like?
    
<details><summary>Hints Task 5</summary>
<p>

</p>
</details>    
