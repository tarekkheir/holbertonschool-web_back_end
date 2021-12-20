export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(str) {
    if (typeof str !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = str;
  }

  set length(n) {
    if (typeof n !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = n;
  }

  set students(arr) {
    if (!(arr instanceof Array)) {
      throw TypeError('Students must be an array of strings');
    }
    this._students = arr;
  }
}
