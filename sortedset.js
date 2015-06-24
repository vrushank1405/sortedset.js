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
    } else {
      setArray = [];
    }
  }

  /* Returns true if a given item exists in the set
   */
  SortedSet.prototype.contains = function(element) {
    // TODO: Implement contains method
  };

  /* Gets elements between startIndex and endIndex. If endIndex is omitted, a
   * single element at startIndex is returned.
   */
  SortedSet.prototype.getItems = function(startIndex, endIndex) {
    // TODO: Implement getItems method
  };

  /* Gets all items between specified value range.
   */
  SortedSet.prototype.getItemsBetween = function(lbound, ubound) {
    // TODO: Implement getItemsBetween method
  };

  /* Adds new element to the set if not already in set
   */
  SortedSet.prototype.add = function(element) {
    // TODO: Implement add method
  };

  SortedSet.prototype.remove = function(element) {
    // TODO: Implement remove method
  };

  /* Removes element at index location
   */
  SortedSet.prototype.removeAt = function(index) {
    // TODO: Implement removeAt method
  };

  /* Removes elements that are larger than lower bound and smaller than upper
   * bound
   */
  SortedSet.prototype.removeBetween = function(lbound, ubound) {
   // TODO: Implement removeBetween method
  };

  /* Removes all elements from the set
   */
  SortedSet.prototype.clear = function() {
    // TODO: Implement clear method
  };

  /* Converts a set into a String and returns the result
   */
  SortedSet.prototype.toString = function() {
    return setArray.toString();
  }

  return SortedSet;
}));
