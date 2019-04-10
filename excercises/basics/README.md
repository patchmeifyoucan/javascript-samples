This exercises are based on a simple REST API. The backend uses a static "database" (i.e. a JSON file). The API
should be used to query and process information about customers/users/or whatever business model you want to imagine.
Tasks will refer to the data as "users".
The server code uses inline logic in routes for simplicity reasons. I would not recommend doing this in production
since this code will not be reusable in any way. It is sufficient for these simple base cases.

## Task 0
- run `npm i` to install dependencies
- run `npm start` to start the API server
- go to http://localhost:3000/api/doc and check out the documentation
- go to Task 1 and try to solve it :)
- possible solutions are provided in test files, try to avoid cheating as much as possible :) 

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
Array.prototype.sort()        // can be used to sort an array
Date.parse()                  // returns a number
Math.floor() || Math.ceil()   // use it remove fractional digits
Date.prototype.toISOString()  // converts a numeric date to a date string
Math.min()                    // can be used to find the smallest value in a collection, 
                              // it does not accept an array, though! lookup what the ES6 spread operator does
```

</p>
</details>

## Task 3
1. How many domains does the company "ZILLACON" use?
2. Who were the first 3 users to be registered?
3. Whats the average balance of a database user?
4. At an event, you met a pretty wealthy person who promised to help you starting your business. :beers:, :cocktail:, :tropical_drink: and :wine_glass:
made you forget his name the day after, though. Maybe he did register too?

<details><summary>Hints Task 3</summary>
<p>

The balance is of type `string` in the dataset! Use your knowledge about type conversions to deal with this. 

```javascript
Array.prototype.map()         // transforms a sequence into another sequence
String.prototype.split()      // just as in any other language
```

</p>
</details>

## Task 4
1. The dataset contains duplicate users. Find a way to locate them!
2. How many people work for "EGYPTO"? Who do you think is the intern?
3. Recall Task 2.3. This time, people randomly ask you about a random company and certain properties of their employees.
For example, they might want their names and ages, or just their age. Asking for their balance is illegal and forbidden.

<details><summary>Hints Task 4</summary>
<p>
Write a function that takes two parameters. The first one specifies the company which the data should be about. The second
could be an array of properties to extract. Try to chain .filter and .map methods.

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
