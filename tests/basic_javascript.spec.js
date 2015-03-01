var chai = require('chai');
var expect = chai.expect;

describe('Learning Javascript', function() {


  describe('Numbers', function(){
      it('should pass', function(){
         expect(true).to.be.true;
      });

      it('should fail', function(){
          expect(true).to.not.be.false;
      });
  });
});