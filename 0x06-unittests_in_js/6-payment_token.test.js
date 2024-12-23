// 6-payment_token.test.js
const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', () => {
    it('should return a resolved promise with data when success is true', (done) => {
        getPaymentTokenFromAPI(true)
            .then((response) => {
                expect(response).to.be.an('object');
                expect(response).to.have.property('data', 'Successful response from the API');
                done(); // Signal that the test is complete
            })
            .catch((error) => done(error)); // Pass error to done if the promise is rejected
    });

    it('should do nothing when success is false', (done) => {
        const result = getPaymentTokenFromAPI(false);
        expect(result).to.be.undefined; // No promise should be returned
        done();
    });
});
