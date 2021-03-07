import { Point } from "./Point";
import { Line } from "./Line";

export class Circle {

    static fromPoint(origin: Point, radius: number) {
        return new Circle(origin.x, origin.y, radius);
    }

    constructor(
        public x: number,
        public y: number,
        public radius: number
    ) {
    }

    intersection(line: Line): Point[] {
        // make circle center the origin of our coordinate system:
        line.translate(-this.x, -this.y);

        // calculate intersection:
        const result = [new Point(0, 0), new Point(0, 0)];


        // move coordinates back to normal
        result.forEach(point => point.translate(this.x, this.y));

        return [new Point(0, 0), new Point(0, 0)];
    }
}