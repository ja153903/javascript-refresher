class Shape {
    constructor(id, x, y) {
        this.id = id
        this.move(x, y)
    }

    move (x, y) {
        this.x = x
        this.y = y
    }
}

class Rectangle extends Shape {
    constructor(id, x, y, width, height) {
        super(id, x, y)
        this.width = width
        this.height = height
    }
}

var shape = new Shape(0, 3, 4);
console.log(shape.id)
console.log(shape.x)
console.log(shape.y)