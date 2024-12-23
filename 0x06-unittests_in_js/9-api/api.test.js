// api.test.js
const request = require('request');
const { expect } = require('chai');

const baseUrl = 'http://localhost:7865';

describe('Index page', () => {
    it('should return the correct status code', (done) => {
        request(baseUrl, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it('should return the correct result', (done) => {
        request(baseUrl, (err, res, body) => {
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});

describe('Cart page', () => {
    it('should return the correct status code and result when id is a number', (done) => {
        request(`${baseUrl}/cart/12`, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.equal('Payment methods for cart 12');
            done();
        });
    });

    it('should return 404 when id is not a number', (done) => {
        request(`${baseUrl}/cart/hello`, (err, res, body) => {
            expect(res.statusCode).to.equal(404);
            done();
        });
    });

    it('should return 404 for missing id', (done) => {
        request(`${baseUrl}/cart/`, (err, res, body) => {
            expect(res.statusCode).to.equal(404);
            done();
        });
    });
});
