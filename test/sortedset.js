var expect = require('expect.js');
var SortedSet = require('../sortedset');

describe('SortedSet', function() {
  var sortedset = new SortedSet();

  describe('#contains', function() {
    beforeEach(function(done) {
      sortedset.add(1);
      sortedset.add(2);
      sortedset.add(3);
      done();
    });

    it('returns true for existing set element', function(done) {
      expect(sortedset.contains(3)).to.eql(true);
      done();
    });

    it('returns false for nonexistant set element', function(done) {
      expect(sortedset.contains(4)).to.eql(false);
      done();
    });
  })
});
