# simple-sort

`simple-sort` provides a straightforward collection of sorting methods and sort functions.

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
const objStrArr = [{name:'Janeway'},{num:'Picard'},{num:'Cisco'}];

// locale sort array of objects by property in ascending order
sorter.localeSortByPropAsc(objStrArr, 'name');
// -> [{name:'Cisco'},{num:'Janway'},{num:'Picard'}]

// locale sort array of objects by property in descending order
sorter.localSortByPropDes(objStrArr, 'name');
// -> [{name:'Picard'},{num:'Janway'},{num:'Cisco'}]

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
const objStrArr = [{name:'Janeway'},{num:'Picard'},{num:'Cisco'}];

// locale sort array of objects by property in ascending order
objStrArr.sort(sorter.localeSortByPropAscFunc('name'));
// objStrArr -> [{name:'Cisco'},{num:'Janway'},{num:'Picard'}]

// locale sort array of objects by property in descending order
objStrArr.sort(sorter.localSortByPropDesFunc('name'));
// objStrArr -> [{name:'Picard'},{num:'Janway'},{num:'Cisco'}]
```

## Docs
Documentation of all available methods can be found [here](https://github.com/rBurgett/simple-sort/wiki#sorter).

## Contributions
Contributions are welcome! If you have any issues and/or contributions you would like to make, feel free to file an issue and/or issue a pull request.

## License
Apache License Version 2.0

Copyright (c) 2016 by Ryan Burgett.
