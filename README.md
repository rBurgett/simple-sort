# simple-sort

`simple-sort` provides a straightforward collection of sorting methods and sort functions.

### Installation
```
$ npm install json-next
```

### Usage
Import the library:
```js
import Sorter from 'simple-sort'; // or var Sorter = require('simple-sort').default;
```
Sorting methods:
```js
// create an instance
const sorter = new Sorter('en');

// sample data array
const numArr = [2,3,1];

// sort values in asending order
sorter.sortAsc(numArr)
// -> [1,2,3]

// sort values in descending order
sorter.sortDes(numArr)
// -> [3,2,1]

// sample array
const wordArr = ['Janeway', 'Picard', 'Cisco'];

// sort by locale in ascending order
sorter.sortByLocaleAsc(wordArr);
// -> ['Cisco','Janeway','Picard']

// sort by locale in descending order
sorter.sortByLocaleDes(wordArr);
// -> ['Picard','Janeway','Cisco']

```

### Docs
Documentation of all available methods can be found [here](https://github.com/rBurgett/simple-sort/wiki#sorter).
