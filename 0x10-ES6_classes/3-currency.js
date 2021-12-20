export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(str) {
    if (typeof str !== 'string') {
      throw TypeError('Code must be a string');
    }
    this._code = str;
  }

  get name() {
    return this._name;
  }

  set name(str) {
    if (typeof str !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = str;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
