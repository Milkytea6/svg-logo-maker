class Shapes {
    constructor(stroke, fill, strokeWidth){
        this.stroke = stroke,
        this.fill = fill,
        this.strokeWidth = strokeWidth
    }
}
class Square extends Shapes {
    constructor(x, y, width, height, stroke, fill, strokeWidth){
        super(stroke, fill, strokeWidth),
        this.x = x,
        this.y = y,
        this.width = width,
        this.height = height
    }
}
class Circle extends Shapes {
    constructor(cx, cy, r, stroke, fill, strokeWidth) {
        super(stroke, fill, strokeWidth),
        this.cx = cx,
        this.cy = cy,
        this.r = r
    }
}
class Triangle extends Shapes {
    constructor(points, stroke, fill, strokeWidth){
        super(stroke, fill, strokeWidth),
        this.points = points

    }
}