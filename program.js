var Circle = /** @class */ (function () {
    function Circle(obj) {
        this.CircleRadius = 1.0;
        this.CircleColor = "red";
        this.CircleRadius = obj.radius;
        this.CircleColor = obj.color;
    }
    Circle.prototype.getRadius = function () {
        return this.CircleRadius;
    };
    ;
    Circle.prototype.setRadius = function (radius) {
        this.CircleRadius = radius;
    };
    ;
    Circle.prototype.getColor = function () { return this.CircleColor; };
    ;
    Circle.prototype.setColor = function (color) {
        this.CircleColor = color;
    };
    ;
    Circle.prototype.toString = function () {
        return ("Circle[" + this.CircleRadius + "," + this.CircleColor + "]");
    };
    ;
    Circle.prototype.getArea = function () {
        return (Math.PI * this.CircleRadius * this.CircleRadius);
    };
    ;
    Circle.prototype.getCircumference = function () {
        return (2 * Math.PI * this.CircleRadius);
    };
    ;
    return Circle;
}());
// Compute circle area and circumference
(document.getElementById("computecircleinfo")).addEventListener("click", function () {
    var radius = +(document.getElementById("circleradius").value);
    var color = (document.getElementById("circlecolor").value);
    var C1 = new Circle({ radius: radius, color: color });
    document.getElementById("circlearea").textContent =
        "Area of circle with radius " + radius + " & color " + color + " is " + C1.getArea().toFixed(2) + ".";
    document.getElementById("circlecircumference").textContent =
        "circumference of circle with radius " + radius + " & color " + color + " is " + C1.getCircumference().toFixed(2) + ".";
});
