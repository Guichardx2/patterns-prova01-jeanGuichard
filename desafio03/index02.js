//OCP - Open/Closed Principle SOLID

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}

class AreaCalculator {
    totalArea(shapes) {
        return shapes.reduce((total, shape) => total + shape.area(), 0);
    }
}

const shapes = [
    new Circle(5),
    new Rectangle(10, 20),
];

const calculator = new AreaCalculator();
console.log('Área total:', calculator.totalArea(shapes));