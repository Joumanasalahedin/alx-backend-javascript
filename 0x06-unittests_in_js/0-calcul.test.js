// 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
    it('should return 4 when inputs are 1 and 3', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it('should return 5 when inputs are 1 and 3.7', () => {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });

    it('should return 5 when inputs are 1.2 and 3.7', () => {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });

    it('should return 6 when inputs are 1.5 and 3.7', () => {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });

    it('should handle negative numbers correctly', () => {
        assert.strictEqual(calculateNumber(-1.5, -3.2), -4);
    });

    it('should return 0 when inputs are 0 and 0', () => {
        assert.strictEqual(calculateNumber(0, 0), 0);
    });
    it('should round only the second number when the first is already an integer', () => {
        assert.strictEqual(calculateNumber(4, 3.7), 8);
    });
});
