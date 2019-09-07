class Circle{
    constructor(radius){
        this.radius = radius;
    }
    getDiameter(){
        return this.radius*2
    }
    getCircumference(){
        return  2*Math.PI * this.radius
    }
    getArea(){
        return Math.PI * Math.pow(this.radius, 2)
    }
}
const circle = new Circle (20);

const diameter = circle.getDiameter();
console.log (diameter);
const circumference = circle.getCircumference();
console.log (circumference);
const area = circle.getArea();
console.log (area);
