# sortedset.js

Sorted set is a datatype which keeps a unique set of values in sorted order.

For example, this library can be used as follows:
```javascript
var foo = new SortedSet([2, 4, 1]);

// Returns "1,2,4"
foo.toString();

foo.add(3);

// Returns "1,2,3,4"
foo.toString();

// Duplicate element has no effect
foo.add(3);

// Still returns "1,2,3,4"
foo.toString();
```

This is a skeleton code for frontend JavaScript takehome assignment which
job candidates are expected to fork and submit their solutions.

## Implentation

Clone this repository and implement a sorted set. You may use the following
built-in JavaScript array methods for your implementation:

* [`concat(a, b, c, ...)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat):
  joins two or more arrays and returns a copy of the
  joined arrays
* [`indexOf(x)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf):
  returns the index of an element `x` search from the start of
  the array or returns -1 if element cannot be found
* [`lastIndexOf(x)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf):
  returns the last index of an element `x` searching from
  the end of the array or returns -1 if element cannot be found
* [`pop()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop):
  removes the last array element and returns the element
* [`push(x)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push):
  adds new element `x` to the end of the array and returns the new array length
* [`reverse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse):
  reverses the order of elements
* [`shift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift):
  removes and returns the first array element (as opposed to `pop()`)
* [`slice(i, j)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice):
  slices the elements between index `i` and `j` and returns as a new array
* [`sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort):
  sorts the array elements
* [`splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice):
  adds/removes elements to/from the array and returns removed elements
* [`unshift(x)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift):
  adds new element `x` to the beginning of the array and returns the new array length

These are the functions that need to be implemented for this assignment:

* **add(el)**: Adds new element to the sorted set if not already in set
* **clear()**: Clears all elements in set
* **contains(el)**: Returns `true` if a given element exists in the set
* **get(startIndex, endIndex)**: Gets elements between `startIndex` and
  `endIndex`. If `endIndex` is omitted, a single element at `startIndex` is
  returned.
* **getBetween(lbound, ubound, exclusive)**: Gets all elements between
  specified value range. If `exclusive` is `true`, values at lower bound and
  upper bound are not inclusive.
* **remove(element)**: Removes element from set and returns the element.
* **removeAt(index)**: Removes element at index location and returns the
  element.
* **removeBetween(lbound, ubound, exclusive)**: Removes elements between
  specified value range. If `exclusive` is `true`, elements are remove
  exclusively.

You are _**not**_ allowed to use external JavaScript libraries. Do not worry
about efficiency in sorting or runtime (e.g. O(n²) vs O(log n)) as we are
trying to see if you can take the basic JavaScript building blocks and write a
solution to solve a problem.

