"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
const direcitons_1 = require("./direcitons");
exports.getDropLinePosition = (absoluteXY, nodeMeta, direction) => {
    const x = Math.max(absoluteXY[0] - nodeMeta.absolutePosition.left, 0);
    const y = Math.max(absoluteXY[1] - nodeMeta.absolutePosition.top, 0);
    const dropLineDirection = direcitons_1.getDropLineDirection(nodeMeta.width, nodeMeta.height, [x, y], direction);
    if (dropLineDirection == undefined)
        throw new Error("A drop line direction is undefined");
    let left = nodeMeta.relativePosition.left;
    let top = nodeMeta.relativePosition.top;
    if (dropLineDirection === "BOTTOM")
        top += nodeMeta.height;
    if (dropLineDirection === "RIGHT")
        left += nodeMeta.width;
    return { top, left };
};
exports.checkIsInStackableArea = (absoluteXY, nodeMeta, stackableAreaThreshold, direciton) => {
    const x = Math.max(absoluteXY[0] - nodeMeta.absolutePosition.left, 0);
    const y = Math.max(absoluteXY[1] - nodeMeta.absolutePosition.top, 0);
    if (direciton === "vertical") {
        const nodeTop = 0;
        const nodeBottom = nodeMeta.height;
        const isInStackableAreaY = nodeTop + stackableAreaThreshold <= y && y <= nodeBottom - stackableAreaThreshold;
        return isInStackableAreaY;
    }
    if (direciton === "horizontal") {
        const nodeLeft = 0;
        const nodeRight = nodeMeta.width;
        const isInStackableAreaX = nodeLeft + stackableAreaThreshold <= x && x <= nodeRight - stackableAreaThreshold;
        return isInStackableAreaX;
    }
    throw errors_1.createNewError("direction is an unexpected value");
};
