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
});

describe('Available payments', () => {
    it('should return the correct payment methods object', (done) => {
        request(`${baseUrl}/available_payments`, { json: true }, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.deep.equal({
                payment_methods: {
                    credit_cards: true,
                    paypal: false,
                },
            });
            done();
        });
    });
});

describe('Login', () => {
    it('should return the correct welcome message for a user', (done) => {
        request.post(
            {
                url: `${baseUrl}/login`,
                json: true,
                body: { userName: 'Betty' },
            },
            (err, res, body) => {
                expect(res.statusCode).to.equal(200);
                expect(body).to.equal('Welcome Betty');
                done();
            }
        );
    });
});
