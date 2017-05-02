function Arrow() {
    this.x = 0;
    this.y = 0;
    this.rotation = 0;
    this.color = '#3399ff';
}

Arrow.prototype.draw = function (context) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.lineWidth = 5;
    context.fillStyle = this.color;
    context.beginPath();
    context.moveTo(50, 0);
    context.lineTo(0, 50);
    context.lineTo(0, 30);
    context.lineTo(-100, 0);
    context.lineTo(0, -30);
    context.lineTo(0, -50);
    context.closePath();
    context.stroke();
    context.fill();
    context.restore();
};