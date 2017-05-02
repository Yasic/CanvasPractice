function Ball(radius, color) {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.radius = (radius === undefined) ? 10:radius;
    this.color = (color === undefined)? '#3399ff': color;
}

Ball.prototype.draw = function (context) {
    context.save();
    context.beginPath();
    context.fillStyle = this.color;
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fill();
    context.closePath();
    context.restore();
};
