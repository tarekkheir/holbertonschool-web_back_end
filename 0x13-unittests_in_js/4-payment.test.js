const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
  const spy = sinon.spy(console, 'log');

  it('check if math used for both functions are the same', () => {
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(stub.alwaysReturned(10)).to.be.true;
    expect(spy.calledWith('The total is: 10')).to.be.true;
    stub.restore();
    spy.restore();
  });
});
