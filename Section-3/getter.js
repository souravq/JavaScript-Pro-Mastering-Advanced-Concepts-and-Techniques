class Circle {
  constructor(radius) {
    this._radius = radius;
    //this._diameter = this._radius * 2;
  }

  get diameter() {
    return this._radius * 2;
  }
}

const circle = new Circle(4);
console.log(circle.diameter); // 8
circle._radius = 10;
console.log(circle.diameter); // 20
