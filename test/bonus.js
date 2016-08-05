var expect = require('expect.js');
var SortedSet = require('../sortedset');

describe('SortedSet', function() {
  var sortedset;

  beforeEach(function(done) {
    sortedset = new SortedSet([1, 2, 3, 4, 5, 6, 7, 8]);
    done();
  });

  describe('#remove', function() {
    it('removes existing element from the set', function(done) {
      var removedElement = sortedset.remove(2);
      expect(sortedset).to.have.length(7);
      expect(sortedset.at(1)).to.equal(3);
      expect(removedElement).to.equal(2);
      done();
    });

    it('remains sorted after removal', function(done) {
      sortedset.remove(5);
      expect(sortedset.toArray()).to.eql([1, 2, 3, 4, 6, 7, 8])
      done();
    });
  });

  describe('#removeAt', function() {
    it('removes existing element at index', function(done) {
      var removedElement = sortedset.removeAt(0);
      expect(sortedset).to.have.length(7);
      expect(sortedset.at(0)).to.equal(2);
      expect(removedElement).to.equal(1);
      done();
    });

    it('remains sorted after removal', function(done) {
      sortedset.removeAt(3);
      expect(sortedset.toArray()).to.eql([1, 2, 3, 5, 6, 7, 8]);
      done();
    });
  });

  describe('#removeBetween', function() {
    it('removes elements between given values inclusively', function(done) {
      var removedElements = sortedset.removeBetween(2, 7);
      expect(sortedset).to.have.length(2);
      expect(removedElements).to.eql([2, 3, 4, 5, 6, 7]);
      expect(sortedset.toArray()).to.eql([1, 8]);

      var testSet = new SortedSet([1, 3, 5, 7, 9, 11]);
      removedElements = testSet.removeBetween(2, 8);
      expect(testSet).to.have.length(3);
      expect(removedElements).to.eql([3, 5, 7]);
      expect(testSet.toArray()).to.eql([1, 9, 11]);

      testSet = new SortedSet([1, 3, 5, 7, 9, 11]);
      removedElements = testSet.removeBetween(3, 8);
      expect(testSet).to.have.length(3);
      expect(removedElements).to.eql([3, 5, 7]);
      expect(testSet.toArray()).to.eql([1, 9, 11]);

      testSet = new SortedSet([1, 3, 5, 7, 9, 11]);
      removedElements = testSet.removeBetween(2, 7);
      expect(testSet).to.have.length(3);
      expect(removedElements).to.eql([3, 5, 7]);
      expect(testSet.toArray()).to.eql([1, 9, 11]);

      done();
    });

    it('removes elements between given values exclusively', function(done) {
      var removedElements = sortedset.removeBetween(2, 7, true);
      expect(sortedset).to.have.length(4);
      expect(removedElements).to.eql([3, 4, 5, 6]);
      expect(sortedset.toArray()).to.eql([1, 2, 7, 8]);

      var testSet = new SortedSet([1, 3, 5, 7, 9, 11]);
      removedElements = testSet.removeBetween(2, 8, true);
      expect(testSet).to.have.length(3);
      expect(removedElements).to.eql([3, 5, 7]);
      expect(testSet.toArray()).to.eql([1, 9, 11]);

      testSet = new SortedSet([1, 3, 5, 7, 9, 11]);
      removedElements = testSet.removeBetween(3, 8, true);
      expect(testSet).to.have.length(4);
      expect(removedElements).to.eql([5, 7]);
      expect(testSet.toArray()).to.eql([1, 3, 9, 11]);

      testSet = new SortedSet([1, 3, 5, 7, 9, 11]);
      removedElements = testSet.removeBetween(2, 7, true);
      expect(testSet).to.have.length(4);
      expect(removedElements).to.eql([3, 5]);
      expect(testSet.toArray()).to.eql([1, 7, 9, 11]);

      done();
    });
  });
});
