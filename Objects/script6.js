class Rectangle {
    constructor(height,width) {
         heigth = this.height;
         width = this.width;
    }
    
    RectArea () {
        return this.width * this.height;
    }

    RectPerim() {
        return 2 * (this.width + this.height);
    }
}

let someRectangle = new Rectangle(4,5);

console.log("Rectangle Area: ",someRectangle.RectArea());
console.log("Rectangle Perimeter: ", someRectangle.RectPerim());
