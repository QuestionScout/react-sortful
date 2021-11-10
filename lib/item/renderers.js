"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlaceholderElementStyle = (draggingNodeMeta, itemSpacing, direction) => {
    if (draggingNodeMeta == undefined)
        return {};
    const { width, height } = draggingNodeMeta;
    return {
        width: direction === "horizontal" ? width - itemSpacing : width,
        height: direction === "vertical" ? height - itemSpacing : height,
    };
};
exports.getStackedGroupElementStyle = exports.getPlaceholderElementStyle;
