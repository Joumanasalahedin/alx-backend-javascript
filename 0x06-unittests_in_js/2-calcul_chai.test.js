// 2-calcul_chai.test.js
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should return 6 when inputs are 1.4 and 4.5', () => {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });

        it('should return 9 when inputs are 4.6 and 4.3', () => {
            expect(calculateNumber('SUM', 4.6, 4.3)).to.equal(9);
        });
    });

    describe('SUBTRACT', () => {
        it('should return -4 when inputs are 1.4 and 4.5', () => {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });

        it('should return 1 when inputs are 5.5 and 4.6', () => {
            expect(calculateNumber('SUBTRACT', 5.5, 4.6)).to.equal(1);
        });
    });

    describe('DIVIDE', () => {
        it('should return 0.2 when inputs are 1.4 and 4.5', () => {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        });

        it('should return Error when dividing by 0', () => {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });

        it('should return 4.5 when inputs are 9.1 and 1.9', () => {
            expect(calculateNumber('DIVIDE', 9.1, 1.9)).to.equal(4.5);
        });
    });

    describe('Invalid Type', () => {
        it('should throw an error for invalid type', () => {
            expect(() => calculateNumber('INVALID', 1.4, 4.5)).to.throw('Invalid type');
        });
    });
});
