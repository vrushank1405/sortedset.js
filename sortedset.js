(function (global, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  } else {
    global.SortedSet = factory();
  }
}(this, function() {
  "use strict";

  // Internal private array which holds actual set elements
  var setArray;

  // Constructor for the SortedSet class
  function SortedSet(initial) {
    if (arguments.length > 0) {
      // TODO: Handle the case when initial array is provided; if array has
      // elements of duplicate value, reduce down to one instance and sort the
      // elements in ascending order.
        initial.sort(function(a, b) {
          return a - b;
        });
        var temp = initial.filter(function (e, i){
          return initial.indexOf(e, i+1) === -1;
        });

      setArray = temp.slice();
    } else {
      setArray = [];
    }
  }

  /* Accessor; returns element at index
   */
  SortedSet.prototype.at = function(index) {
    return setArray[index];
  };

  /* Converts a set into an Array and returns the result
   */
  SortedSet.prototype.toArray = function() {
    return setArray.slice(0);
  };

  /* Converts a set into a String and returns the result
   */
  SortedSet.prototype.toString = function() {
    return setArray.toString();
  };

  /* Synchronously iterates elements in the set
   */
  SortedSet.prototype.forEach = function(callback, thisArg) {
    if (this === void 0 || this === null ||
        setArray === void 0 || setArray === null) {
      throw new TypeError();
    }

    var t = Object(setArray);
    var len = t.length >>> 0;
    if (typeof callback !== "function") {
      throw new TypeError();
    }

    var context = arguments[1];
    for (var i = 0; i < len; i++) {
      if (i in t) callback.call(context, t[i], i, t);
    }
  };

  /* Read-only property for getting number of elements in sorted set
   */
  Object.defineProperty(SortedSet.prototype, 'length', {
    get: function() {
      return setArray.length;
    }
  });

  /* Returns true if a given element exists in the set
   */
  SortedSet.prototype.contains = function(element) {
    // TODO: Implement contains method
      for(var i = 0; i < setArray.length; i++){
        if(setArray[i] === element)
        {
          return true;
        }
      }
      return false;
  };

  /* Gets elements between startIndex and endIndex. If endIndex is omitted, a
   * single element at startIndex is returned.
   */
  SortedSet.prototype.get = function(startIndex, endIndex) {
    // TODO: Implement get method
      if(!endIndex){
        return setArray[startIndex];
      } else {
        return setArray.slice(startIndex, endIndex+1);
      }
  };

  /* Gets all items between specified value range. If exclusive is set, values
   * at lower bound and upper bound are not included.
   */
  SortedSet.prototype.getBetween = function(lbound, ubound, exclusive) {
    // TODO: Implement getBetween method
      var lower = 0,
          upper = setArray.length;

      if(exclusive !== true){
        if(lbound > ubound)
          return setArray.sliceRange(lbound, ubound);

        reach: {
          while(lower < upper) {
              var m = Math.floor(lower + (upper - lower) / 2);
              if (setArray[m] < lbound)
                  lower = m + 1;
              else if (setArray[m] > ubound)
                  upper = m;
              else
                  break reach;
          }
          return [];

          }

          var lr = m,
              rl = m;

        while(lower < lr){
          m = Math.floor(lower + (lr - lower) / 2);
          if(setArray[m] < lbound)
            lower = m + 1;
          else
            lr = m;
        }

        while(rl<upper){
          m = Math.floor(rl + (upper -rl)/2);
          if(setArray[m] > ubound)
            upper = m;
          else
            rl = m + 1;
        }

        return setArray.slice(lower, upper);

      } else if (exclusive === true){
        if(lbound > ubound)
          return setArray.sliceRange(ubound, lbound);

        reach: {
          while(lower < upper){
            var m = Math.floor(lower + (upper - lower) / 2);
            if(setArray[m] < lbound)
              lower = m + 1;
            else if(setArray[m] > ubound)
              upper = m;
            else
              break reach;
          }

          return [];
        }

        var lr = m,
            rl = m;

        while(lower < lr){
          m = Math.floor(lower + (lr - lower) / 2 );
          if(setArray[m] < lbound + 1)
            lower = m + 1;
          else
            lr = m;
        }

        while(rl < upper){
          m = Math.floor(rl + (upper - rl) / 2);
          if(setArray[m] > ubound-1)
            upper = m;
          else
            rl = m + 1;
        }

        return setArray.slice(lower, upper);
      }
  };

  /* Adds new element to the set if not already in set
   */
  SortedSet.prototype.add = function(element) {
    // TODO: Implement add method
      var i = 0;

      if(setArray.indexOf(element) === -1){
        while(i < setArray.length && setArray[i] < element){
          i++;
        }

        setArray.splice(i, 0, element);
        return setArray;
      }
  };


  /* BONUS MARKS AWARDED IF IMPLEMENTED
   * Implement an asynchronous forEach function. (See above for synchrnous
   * implementation). This method ASYNCHRONOUSLY iterates through each elements
   * in the array and calls a callback function.
   */

  /* Removes element from set and returns the element
   */
  SortedSet.prototype.remove = function(element) {
    // TODO: Implement remove method
      var indexOfElement = setArray.indexOf(element);

      if(indexOfElement != -1){
        setArray.splice(indexOfElement, 1);
      }
  };

  /* Removes element at index location and returns the element
   */
  SortedSet.prototype.removeAt = function(index) {
    // TODO: Implement removeAt method
      return setArray.splice(index, 1);
  };

  /* Removes elements that are larger than lower bound and smaller than upper
   * bound and returns removed elements.
   */
  SortedSet.prototype.removeBetween = function(lbound, ubound, exclusive) {
    // TODO: Implement removeBetween method
  };

  /* Removes all elements from the set
   */
  SortedSet.prototype.clear = function() {
    // TODO: Implement clear method
      if(setArray.length > 0){
        setArray = [];
      }
  };

  SortedSet.prototype.forEachAsync = function(callback, thisArg) {
    // TODO: Implement for bonus marks
  };

  return SortedSet;
}));
