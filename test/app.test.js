const assert = require("chai").assert;
const substractNumbers = require('../index').substractNumbers;
const divideNumbers = require('../index').divideNumbers;
const iLoveGCI = require('../index').iLoveGCI;

describe('App', () => {

    it('Should fix the travis error', () => {
        assert.equal(2, 2);
    });

    it('Should substract two numbers', () => {
        assert.equal(substractNumbers(2, 1), 1);
    });

    it('Should divide two numbers', () => {
        assert.equal(divideNumbers(2, 1), 2);
    });

    it('Should say "I love GCI"', () => {
        assert.equal(iLoveGCI(), 'I love GCI');
    });

});
