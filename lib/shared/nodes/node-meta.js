"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getNodeRect = (element) => {
    const elementRect = element.getBoundingClientRect();
    return {
        width: elementRect.width,
        height: elementRect.height,
        relativePosition: { top: element.offsetTop, left: element.offsetLeft },
        absolutePosition: { top: elementRect.top, left: elementRect.left },
    };
};
exports.getNodeMeta = (element, identifier, groupIdentifier, ancestorIdentifiers, index, isGroup) => (Object.assign({ identifier,
    groupIdentifier,
    ancestorIdentifiers,
    index,
    isGroup,
    element }, getNodeRect(element)));
