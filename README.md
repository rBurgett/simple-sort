# simple-sort

`simple-sort` provides a straightforward collection of sorting methods and sort functions.

## Why use `simple-sort`?
* It provides both sorting methods and sort functions.
* It makes sorting by locale simple (no separate API to remember).
* It provides functionality via plain English method names rather than hard-to-remember parameters.
* It provides you a consistent sorting API, so you don't have to individually write all sorting methods yourself.
* It makes your code more readable and easily understandable, even by somebody unfamiliar with the `simple-sort` API.

## Installation
```
$ npm install simple-sort
```

## Usage
Import the library:
```js
import Sorter from 'simple-sort'; // or var Sorter = require('simple-sort').default;
```
Create an instance:
```js
const sorter = new Sorter('en');
```
####Sorting methods:
```js
// sample data array
const numArr = [2,3,1];

// sort values in ascending order
sorter.sortAsc(numArr);
// -> [1,2,3]

// sort values in descending order
sorter.sortDes(numArr);
// -> [3,2,1]

// sample array
const wordArr = ['Janeway', 'Picard', 'Cisco'];

// sort by locale in ascending order
sorter.sortByLocaleAsc(wordArr);
// -> ['Cisco','Janeway','Picard']

// sort by locale in descending order
sorter.sortByLocaleDes(wordArr);
// -> ['Picard','Janeway','Cisco']

// sample array
const objArr = [{num:2},{num:3},{num:1}];

// sort array of objects by property in ascending order
sorter.sortByPropAsc(objArr, 'num');
// -> [{num:1},{num:2},{num:3}]

// sort array of objects by property in descending order
sorter.sortByPropDes(objArr, 'num');
// -> [{num:3},{num:2},{num:1}]

// sample array
const objStrArr = [{name:'Janeway'},{name:'Picard'},{name:'Cisco'}];

// locale sort array of objects by property in ascending order
sorter.localeSortByPropAsc(objStrArr, 'name');
// -> [{name:'Cisco'},{name:'Janway'},{name:'Picard'}]

// locale sort array of objects by property in descending order
sorter.localSortByPropDes(objStrArr, 'name');
// -> [{name:'Picard'},{name:'Janway'},{name:'Cisco'}]

```
####Function-returning methods:
Each of the previous sort methods are also available as sort functions to pass into `Array.sort()`. All function-returning methods have a `Func` suffix.
```js
// sample data array
const numArr = [2,3,1];

// sort values in asending order
numArr.sort(sorter.sortAscFunc());
// numArr -> [1,2,3]

// sort values in descending order
numArr.sort(sorter.sortDesFunc());
// numArr -> [3,2,1]

// sample array
const wordArr = ['Janeway', 'Picard', 'Cisco'];

// sort by locale in ascending order
wordArr.sort(sorter.sortByLocaleAscFunc());
// wordArr -> ['Cisco','Janeway','Picard']

// sort by locale in descending order
wordArr.sort(sorter.sortByLocaleDesFunc());
// wordArr -> ['Picard','Janeway','Cisco']

// sample array
const objArr = [{num:2},{num:3},{num:1}];

// sort array of objects by property in ascending order
objArr.sort(sorter.sortByPropAscFunc('num'));
// objArr -> [{num:1},{num:2},{num:3}]

// sort array of objects by property in descending order
objArr.sort(sorter.sortByPropDesFunc('num'));
// objArr -> [{num:3},{num:2},{num:1}]

// sample array
const objStrArr = [{name:'Janeway'},{name:'Picard'},{name:'Cisco'}];

// locale sort array of objects by property in ascending order
objStrArr.sort(sorter.localeSortByPropAscFunc('name'));
// objStrArr -> [{name:'Cisco'},{name:'Janway'},{name:'Picard'}]

// locale sort array of objects by property in descending order
objStrArr.sort(sorter.localSortByPropDesFunc('name'));
// objStrArr -> [{name:'Picard'},{name:'Janway'},{name:'Cisco'}]
```

## Docs
Documentation of all available methods can be found [here](https://github.com/rBurgett/simple-sort/wiki#sorter).

## Contributions
Contributions are welcome! If you have any issues and/or contributions you would like to make, feel free to file an issue and/or issue a pull request.

## License
Apache License Version 2.0

Copyright (c) 2016 by Ryan Burgett.
