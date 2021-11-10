"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shared_1 = require("../shared");
exports.setDropLineElementStyle = (dropLineElement, absoluteXY, nodeMeta, direction) => {
    if (dropLineElement == undefined)
        return;
    const dropLinePosition = shared_1.getDropLinePosition(absoluteXY, nodeMeta, direction);
    dropLineElement.style.top = `${dropLinePosition.top}px`;
    dropLineElement.style.left = `${dropLinePosition.left}px`;
    if (direction === "vertical")
        dropLineElement.style.width = `${nodeMeta.width}px`;
    if (direction === "horizontal")
        dropLineElement.style.height = `${nodeMeta.height}px`;
};
exports.getDropLinePositionItemIndex = (dropLineDirection, draggingItemIndex, draggingItemGroupIdentifier, hoveredItemIndex, hoveredItemGroupIdentifier) => {
    let nextIndex = draggingItemIndex;
    if (dropLineDirection === "TOP")
        nextIndex = hoveredItemIndex;
    if (dropLineDirection === "BOTTOM")
        nextIndex = hoveredItemIndex + 1;
    if (dropLineDirection === "LEFT")
        nextIndex = hoveredItemIndex;
    if (dropLineDirection === "RIGHT")
        nextIndex = hoveredItemIndex + 1;
    const isInSameGroup = draggingItemGroupIdentifier === hoveredItemGroupIdentifier;
    if (isInSameGroup && draggingItemIndex < nextIndex)
        nextIndex -= 1;
    return nextIndex;
};
