export * from "./geometry-2d/Circle";
export * from "./geometry-2d/Dimensions";
export * from "./geometry-2d/Line";
export * from "./geometry-2d/Margin";
export * from "./geometry-2d/Offset";
export * from "./geometry-2d/Point";
export * from "./geometry-2d/Rectangle";
export * from "./geometry-2d/Square";
export * from "./geometry-2d/Transform";


import { runDemo } from './demos/demo';

window.onload = () => {
    console.log('geometry-2d started');
    runDemo();
};
