"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsAncestorItem = (targetItemIdentifier, ancestorIdentifiersOfChild) => {
    const ancestorIdentifiersWithoutTarget = [...ancestorIdentifiersOfChild];
    ancestorIdentifiersWithoutTarget.pop();
    return ancestorIdentifiersWithoutTarget.includes(targetItemIdentifier);
};
