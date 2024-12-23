// 3-payment.test.js
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    it('should call Utils.calculateNumber with SUM, 100, and 20', () => {
        // Create a spy for Utils.calculateNumber
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

        // Call the function
        sendPaymentRequestToApi(100, 20);

        // Assert that calculateNumber was called once with the correct arguments
        sinon.assert.calledOnceWithExactly(calculateNumberSpy, 'SUM', 100, 20);

        // Restore the spy
        calculateNumberSpy.restore();
    });
});
