const { expect } = require('chai');
const { fibonacci } = require('../fibonacci'); // Import the function

describe('Fibonacci Function TDD', () => {
    it('Should return 0 for fibonacci(0)', () => {
        expect(fibonacci(0)).to.equal(0);
    });

    it('Should return 1 for fibonacci(1)', () => {
        expect(fibonacci(1)).to.equal(1);
    });

    it('Should return 1 for fibonacci(2)', () => {
        expect(fibonacci(2)).to.equal(1);
    });

    it('Should return 2 for fibonacci(3)', () => {
        expect(fibonacci(3)).to.equal(2);
    });

    it('Should return 3 for fibonacci(4)', () => {
        expect(fibonacci(4)).to.equal(3);
    });

    it('Should return 5 for fibonacci(5)', () => {
        expect(fibonacci(5)).to.equal(5);
    });

    it('Should return 55 for fibonacci(10)', () => {
        expect(fibonacci(10)).to.equal(55);
    });
});
