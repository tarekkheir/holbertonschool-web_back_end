const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    expect(spy.calledOnce).to.be.true;
    spy.restore();
  });

  it('call sendPaymentRequestToApi with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith('The total is: 120')).to.be.true;
  });

  it('call sendPaymentRequestToApi with 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledOnceWith('The total is: 20')).to.be.true;
  });
});
