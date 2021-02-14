interface circleInfo
{
    radius:number;
    color:string;
}
class Circle
{
    CircleRadius:number=1.0;
    CircleColor:string="red";

    constructor(obj: circleInfo)
    {
        this.CircleRadius = obj.radius;
        this.CircleColor=obj.color;
    }

    getRadius():number{
        return this.CircleRadius;
     
    };

    setRadius(radius:number):void {
    this.CircleRadius = radius;
      
    };


    getColor():string
    {   return this.CircleColor   };
 

    setColor(color:string):void{
         this.CircleColor = color};

    toString():string{
        return (`Circle[${this.CircleRadius},${this.CircleColor}]`);
    };

    getArea():number{
     
        return (Math.PI*this.CircleRadius*this.CircleRadius);
    };

    getCircumference():number{
    
       return(2*Math.PI*this.CircleRadius)
    };

   

}
// Compute circle area and circumference

(<HTMLElement>(document.getElementById("computecircleinfo"))).addEventListener("click",()=>
{
   
    let radius= +((<HTMLInputElement>document.getElementById("circleradius")).value);
    let color = ((<HTMLInputElement>document.getElementById("circlecolor")).value);
 
    let C1= new Circle ({radius,color});

    (<HTMLInputElement>document.getElementById("circlearea")).textContent = 
    `Area of circle with radius ${radius} & color ${color} is ${C1.getArea().toFixed(2)}.`;
    
    
    (<HTMLInputElement>document.getElementById("circlecircumference")).textContent = 
    `circumference of circle with radius ${radius} & color ${color} is ${C1.getCircumference().toFixed(2)}.`;

});




    

