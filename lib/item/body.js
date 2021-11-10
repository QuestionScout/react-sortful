"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styleElementId = "react-sortful-global-style";
exports.setBodyStyle = (bodyElement, draggingCusrsorStyle, 
// istanbul ignore next
documentElement = document) => {
    // Disables to select elements in entire page.
    bodyElement.style.userSelect = "none";
    // Applies a cursor style when dragging.
    if (draggingCusrsorStyle != undefined) {
        const styleElement = documentElement.createElement("style");
        styleElement.textContent = `* { cursor: ${draggingCusrsorStyle} !important; }`;
        styleElement.setAttribute("id", styleElementId);
        documentElement.head.appendChild(styleElement);
    }
};
exports.clearBodyStyle = (bodyElement, 
// istanbul ignore next
documentElement = document) => {
    var _a;
    // Enables to select elements in entire page.
    bodyElement.style.removeProperty("user-select");
    // Resets a cursor style when dragging.
    (_a = documentElement.getElementById(styleElementId)) === null || _a === void 0 ? void 0 : _a.remove();
};
