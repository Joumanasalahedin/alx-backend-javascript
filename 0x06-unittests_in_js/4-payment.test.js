// 4-payment.test.js
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    let calculateNumberStub;
    let consoleLogSpy;

    beforeEach(() => {
        // Stub Utils.calculateNumber to always return 10
        calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

        // Spy on console.log
        consoleLogSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        // Restore stub and spy
        calculateNumberStub.restore();
        consoleLogSpy.restore();
    });

    it('should call Utils.calculateNumber with SUM, 100, and 20', () => {
        // Call the function
        sendPaymentRequestToApi(100, 20);

        // Verify the stub is called with the correct arguments
        sinon.assert.calledOnceWithExactly(calculateNumberStub, 'SUM', 100, 20);

        // Verify that console.log logs the correct message
        sinon.assert.calledOnceWithExactly(consoleLogSpy, 'The total is: 10');
    });
});
