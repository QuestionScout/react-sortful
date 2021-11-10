"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDropLineDirection = (nodeWidth, nodeHeight, pointerXY, direction) => {
    const [pointerX, pointerY] = pointerXY;
    if (direction === "vertical")
        return nodeHeight / 2 >= pointerY ? "TOP" : "BOTTOM";
    if (direction === "horizontal")
        return nodeWidth / 2 >= pointerX ? "LEFT" : "RIGHT";
};
exports.getDropLineDirectionFromXY = (absoluteXY, nodeMeta, direction) => {
    const x = Math.max(absoluteXY[0] - nodeMeta.absolutePosition.left, 0);
    const y = Math.max(absoluteXY[1] - nodeMeta.absolutePosition.top, 0);
    return exports.getDropLineDirection(nodeMeta.width, nodeMeta.height, [x, y], direction);
};
