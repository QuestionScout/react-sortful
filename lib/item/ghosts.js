"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeGhostElementStyle = (itemElement, ghostWrapperElement, itemSpacing, direction) => {
    if (ghostWrapperElement == undefined)
        return;
    const elementRect = itemElement.getBoundingClientRect();
    const top = direction === "vertical" ? elementRect.top + itemSpacing / 2 : elementRect.top;
    const left = direction === "horizontal" ? elementRect.left + itemSpacing / 2 : elementRect.left;
    const width = direction === "horizontal" ? elementRect.width - itemSpacing : elementRect.width;
    const height = direction === "vertical" ? elementRect.height - itemSpacing : elementRect.height;
    ghostWrapperElement.style.top = `${top}px`;
    ghostWrapperElement.style.left = `${left}px`;
    ghostWrapperElement.style.width = `${width}px`;
    ghostWrapperElement.style.height = `${height}px`;
};
exports.moveGhostElement = (ghostWrapperElement, movementXY) => {
    if (ghostWrapperElement == undefined)
        return;
    const [x, y] = movementXY;
    ghostWrapperElement.style.transform = `translate3d(${x}px, ${y}px, 0)`;
};
exports.clearGhostElementStyle = (ghostWrapperElement) => {
    if (ghostWrapperElement == undefined)
        return;
    ghostWrapperElement.style.removeProperty("width");
    ghostWrapperElement.style.removeProperty("height");
};
