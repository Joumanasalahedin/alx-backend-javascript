// 5-payment.test.js
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
    let consoleLogSpy;

    beforeEach(() => {
        // Spy on console.log before each test
        consoleLogSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        // Restore console.log after each test
        consoleLogSpy.restore();
    });

    it('should log the correct total for 100 and 20', () => {
        sendPaymentRequestToApi(100, 20);

        // Verify that console.log is called once
        sinon.assert.calledOnce(consoleLogSpy);

        // Verify that console.log logs the correct message
        sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 120');
    });

    it('should log the correct total for 10 and 10', () => {
        sendPaymentRequestToApi(10, 10);

        // Verify that console.log is called once
        sinon.assert.calledOnce(consoleLogSpy);

        // Verify that console.log logs the correct message
        sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 20');
    });
});
