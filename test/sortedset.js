var expect = require('expect.js');
var SortedSet = require('../sortedset');

describe('SortedSet', function() {
  var sortedset = new SortedSet();

  beforeEach(function(done) {
    sortedset.clear();
    sortedset.add(1);
    sortedset.add(2);
    sortedset.add(3);
    sortedset.add(4);
    sortedset.add(5);
    sortedset.add(6);
    sortedset.add(7);
    sortedset.add(8);
    done();
  });

  describe('#add', function() {
    it('adds new element to the set if not already in set', function(done) {
      sortedset.add(10);
      expect(sortedset).to.have.length(9);
      expect(sortedset.at(8)).to.equal(10);

      sortedset.add(9);
      expect(sortedset).to.have.length(10);
      expect(sortedset.at(8)).to.equal(9);
      expect(sortedset.at(9)).to.equal(10);

      done();
    });

    it('does not add existing element to the set', function(done) {
      sortedset.add(2);
      expect(sortedset).to.have.length(8);
      expect(sortedset.at(1)).to.equal(2);
      expect(sortedset.at(2)).to.equal(3);
      done();
    });
  });

  describe('#at', function() {
    it('returns element at index', function(done) {
      expect(sortedset.at(0)).to.equal(1);
      expect(sortedset.at(1)).to.equal(2);
      expect(sortedset.at(2)).to.equal(3);
      done();
    });
  });

  describe('#clear', function() {
    it('clears all elements from set', function(done) {
      sortedset.clear();
      expect(sortedset).to.have.length(0);
      done();
    });
  });

  describe('#contains', function() {
    it('returns true for existing set element', function(done) {
      expect(sortedset.contains(3)).to.equal(true);
      done();
    });

    it('returns false for nonexistant set element', function(done) {
      expect(sortedset.contains(0)).to.equal(false);
      done();
    });
  });

  describe('#get', function() {
    it('returns elements between start and end indexes', function(done) {
      expect(sortedset.get(0, 2)).to.eql([1, 2, 3]);
      expect(sortedset.get(1, 2)).to.eql([2, 3]);
      done();
    });

    it('returns element at index', function(done) {
      expect(sortedset.get(0)).to.eql(1);
      done();
    });
  });

  describe('#getBetween', function() {
    it('returns elements between given values inclusively', function(done) {
      expect(sortedset.getBetween(2, 7)).to.eql([2, 3, 4, 5, 6, 7]);
      done();
    });

    it('returns elements between given values exclusively', function(done) {
      expect(sortedset.getBetween(2, 7, true)).to.eql([3, 4, 5, 6]);
      done();
    });
  });

  describe('#remove', function() {
    it('removes existing element from the set', function(done) {
      var removedElement = sortedset.remove(2);
      expect(sortedset).to.have.length(7);
      expect(sortedset.at(1)).to.equal(3);
      expect(removedElement).to.equal(2);
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
  });

  describe('#removeBetween', function() {
    it('removes elements between given values inclusively', function(done) {
      var removedElements = sortedset.removeBetween(2, 7);
      expect(sortedset).to.have.length(2);
      expect(removedElements).to.eql([2, 3, 4, 5, 6, 7]);
      expect(sortedset.toArray()).to.eql([1, 8]);
      done();
    });

    it('removes elements between given values exclusively', function(done) {
      var removedElements = sortedset.removeBetween(2, 7, true);
      expect(sortedset).to.have.length(4);
      expect(removedElements).to.eql([3, 4, 5, 6]);
      expect(sortedset.toArray()).to.eql([1, 2, 7, 8]);
      done();
    });
  });
});
