export abstract class Shape {
  constructor(private _x: number, private _y: number) {}

  get X(): number {
    return this._x;
  }
  set X(value: number) {
    this._x = value;
  }
  get Y(): number {
    return this._y;
  }
  set Y(value: number) {
    this._y = value;
  }

  getInfo():string{
    return `x = ${this._x}, y = ${this._y}`;
  }

  abstract calculateArea():number;
}
