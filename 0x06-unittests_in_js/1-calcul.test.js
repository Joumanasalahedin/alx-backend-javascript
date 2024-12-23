// 1-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should return 6 when inputs are 1.4 and 4.5', () => {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        });

        it('should return 9 when inputs are 4.6 and 4.3', () => {
            assert.strictEqual(calculateNumber('SUM', 4.6, 4.3), 9);
        });
    });

    describe('SUBTRACT', () => {
        it('should return -4 when inputs are 1.4 and 4.5', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });

        it('should return 1 when inputs are 5.5 and 4.6', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 4.6), 1);
        });
    });

    describe('DIVIDE', () => {
        it('should return 0.2 when inputs are 1.4 and 4.5', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });

        it('should return Error when dividing by 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });

        it('should return 5 when inputs are 9.1 and 1.9', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 9.1, 1.9), 4.5);
        });
    });

    describe('Invalid Type', () => {
        it('should throw an error for invalid type', () => {
            assert.throws(() => calculateNumber('INVALID', 1.4, 4.5), /Invalid type/);
        });
    });
});
