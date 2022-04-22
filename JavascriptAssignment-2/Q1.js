class Shape
{
    constructor(name,shape){
        this.name = name;
        this.shape = shape;
    }
    getShapeInformation(){
        console.log("Now We getting the information of Shape of the selected one");
    }
}

class Circle extends Shape
{
    constructor(name,shape,radius){
        super(name,shape);
        this.radius = radius;
    }
    getArea(){
        let area = Math.PI * (this.radius*this.radius);
        return area;
    }
    getShapeInformation()
    {
        super.getShapeInformation();
        console.log("name of the shape : "+this.name+ " shape : "+this.shape);
        console.log("Now calculating the area of the circle");
    }
}

class Rectangle extends Shape
{
    constructor(name,shape,length,width)
    {
        super(name,shape);
        this.length = length;
        this.width = width;
    }
    getArea()
    {
        return this.length*this.width;
    }
    getShapeInformation()
    {
        super.getShapeInformation();
        console.log("name of the shape : "+this.name+ " shape : "+this.shape);
        console.log("Now Calculating the area of rectangle");
    }
}
cir = new Circle("circle","round shape", 5);
cir.getShapeInformation();
console.log( cir.getArea());

rec = new Rectangle("rectangle","rectangular shape",10,20);
rec.getShapeInformation();
console.log(rec.getArea());
