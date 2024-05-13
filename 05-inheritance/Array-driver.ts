import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let myShape = new Shape(10, 20);

let myCircle = new Circle(10, 20, 30);

let myRectangle = new Rectangle(0, 0, 10, 20);

// array
let shapes: Shape[] = [];
shapes.push(myShape);
shapes.push(myCircle);
shapes.push(myRectangle);

for(let tmp of shapes){
    console.log((tmp.getInfo()))
}