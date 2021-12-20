import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(n) {
    if (typeof n !== 'number') {
      throw TypeError('Amount must be a number');
    }
    this._amount = n;
  }

  get currency() {
    return this._currency;
  }

  set currency(cls) {
    if (!(cls instanceof Currency)) {
      throw TypeError('Currency must be a class');
    }
    this._currency = cls;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
