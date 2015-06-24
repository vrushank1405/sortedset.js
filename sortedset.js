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
  this.setArray = [];

  return {
    /* Returns true if a given item exists in the set
     */
    contains: function() {
      // TODO: Implement contains method
    },

    /* Gets elements between startIndex and endIndex. If endIndex is omitted, a
     * single element at startIndex is returned.
     */
    getItems: function(startIndex, endIndex) {
      // TODO: Implement getItems method
    },

    /* Gets all items between specified value range.
     */
    getItemsBetween: function(lbound, ubound) {
      // TODO: Implement getItemsBetween method
    },

    /* Adds new element to the set if not already in set
     */
    add: function(element) {
      // TODO: Implement add method
    },

    remove: function(element) {
      // TODO: Implement remove method
    },

    /* Removes element at index location
     */
    removeAt: function(index) {
      // TODO: Implement removeAt method
    },

    /* Removes elements that are larger than lower bound and smaller than upper
     * bound
     */
    removeBetween: function(lbound, ubound) {
     // TODO: Implement removeBetween method
    }

    /* Removes all elements from the set
     */
    clear: function() {
      // TODO: Implement clear method
    }
  };
}));
