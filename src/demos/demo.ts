import { Circle } from "../geometry-2d/Circle";
import { Rectangle } from "../geometry-2d/Rectangle";

const PANE = new Rectangle(1280, 786);
const ORIGIN = PANE.center;
const RADIUS = PANE.height / 3;

export function runDemo() {
    const circle = new Circle(ORIGIN, RADIUS);
}
