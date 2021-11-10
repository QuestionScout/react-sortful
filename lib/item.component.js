"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_use_gesture_1 = require("react-use-gesture");
const shared_1 = require("./shared");
const list_1 = require("./list");
const groups_1 = require("./groups");
const item_1 = require("./item");
exports.Item = (props) => {
    var _a, _b, _c, _d;
    const listContext = React.useContext(list_1.ListContext);
    const groupContext = React.useContext(groups_1.GroupContext);
    const wrapperElementRef = React.useRef(null);
    const className = props.className || "";
    const customStyle = props.style;
    const ancestorIdentifiers = [...groupContext.ancestorIdentifiers, props.identifier];
    const isGroup = (_a = props.isGroup) !== null && _a !== void 0 ? _a : false;
    const isLocked = (_b = (listContext.isDisabled || props.isLocked)) !== null && _b !== void 0 ? _b : false;
    const isLonley = (_c = props.isLonely) !== null && _c !== void 0 ? _c : false;
    const isUsedCustomDragHandlers = (_d = props.isUsedCustomDragHandlers) !== null && _d !== void 0 ? _d : false;
    // Registers an identifier to the group context.
    const childIdentifiersRef = React.useRef(new Set());
    React.useEffect(() => {
        groupContext.childIdentifiersRef.current.add(props.identifier);
        return () => {
            groupContext.childIdentifiersRef.current.delete(props.identifier);
        };
    }, []);
    // Clears timers.
    const clearingDraggingNodeTimeoutIdRef = React.useRef();
    React.useEffect(() => () => {
        window.clearTimeout(clearingDraggingNodeTimeoutIdRef.current);
    }, []);
    const onDragStart = React.useCallback(() => {
        var _a, _b;
        const element = wrapperElementRef.current;
        if (element == undefined)
            return;
        item_1.setBodyStyle(document.body, listContext.draggingCursorStyle);
        item_1.initializeGhostElementStyle(element, (_a = listContext.ghostWrapperElementRef.current) !== null && _a !== void 0 ? _a : undefined, listContext.itemSpacing, listContext.direction);
        // Sets contexts to values.
        const nodeMeta = shared_1.getNodeMeta(element, props.identifier, groupContext.identifier, ancestorIdentifiers, props.index, isGroup);
        listContext.setDraggingNodeMeta(nodeMeta);
        // Calls callbacks.
        (_b = listContext.onDragStart) === null || _b === void 0 ? void 0 : _b.call(listContext, {
            identifier: nodeMeta.identifier,
            groupIdentifier: nodeMeta.groupIdentifier,
            index: nodeMeta.index,
            isGroup: nodeMeta.isGroup,
        });
    }, [
        listContext.itemSpacing,
        listContext.direction,
        listContext.onDragStart,
        listContext.draggingCursorStyle,
        groupContext.identifier,
        props.identifier,
        props.index,
        ancestorIdentifiers,
        isGroup,
    ]);
    const onDrag = React.useCallback((isDown, absoluteXY) => {
        var _a;
        if (!isDown)
            return;
        item_1.moveGhostElement((_a = listContext.ghostWrapperElementRef.current) !== null && _a !== void 0 ? _a : undefined, absoluteXY);
    }, []);
    const onDragEnd = React.useCallback(() => {
        var _a;
        item_1.clearBodyStyle(document.body);
        item_1.clearGhostElementStyle((_a = listContext.ghostWrapperElementRef.current) !== null && _a !== void 0 ? _a : undefined);
        // Calls callbacks.
        const destinationMeta = listContext.destinationMetaRef.current;
        listContext.onDragEnd({
            identifier: props.identifier,
            groupIdentifier: groupContext.identifier,
            index: props.index,
            isGroup,
            nextGroupIdentifier: destinationMeta != undefined ? destinationMeta.groupIdentifier : groupContext.identifier,
            nextIndex: destinationMeta != undefined ? destinationMeta.index : props.index,
        });
        // Resets context values.
        listContext.setDraggingNodeMeta(undefined);
        listContext.setIsVisibleDropLineElement(false);
        listContext.setStackedGroupIdentifier(undefined);
        listContext.hoveredNodeMetaRef.current = undefined;
        listContext.destinationMetaRef.current = undefined;
    }, [listContext.onDragEnd, groupContext.identifier, props.identifier, props.index, isGroup]);
    const onHover = React.useCallback((element) => {
        // Initialize if the dragging item is this item or an ancestor group of this item.
        const draggingNodeMeta = listContext.draggingNodeMeta;
        const isNeededInitialization = draggingNodeMeta == undefined ||
            props.identifier === draggingNodeMeta.identifier ||
            item_1.checkIsAncestorItem(draggingNodeMeta.identifier, ancestorIdentifiers);
        if (isNeededInitialization) {
            listContext.setIsVisibleDropLineElement(false);
            listContext.hoveredNodeMetaRef.current = undefined;
            listContext.destinationMetaRef.current = undefined;
            return;
        }
        listContext.setIsVisibleDropLineElement(true);
        listContext.hoveredNodeMetaRef.current = shared_1.getNodeMeta(element, props.identifier, groupContext.identifier, ancestorIdentifiers, props.index, isGroup);
    }, [listContext.draggingNodeMeta, groupContext.identifier, props.identifier, props.index, ancestorIdentifiers, isGroup]);
    const onMoveForStackableGroup = React.useCallback((hoveredNodeMeta) => {
        var _a;
        // Sets contexts to values.
        listContext.setIsVisibleDropLineElement(false);
        listContext.setStackedGroupIdentifier(props.identifier);
        listContext.destinationMetaRef.current = {
            groupIdentifier: props.identifier,
            index: undefined,
        };
        // Calls callbacks.
        (_a = listContext.onStackGroup) === null || _a === void 0 ? void 0 : _a.call(listContext, {
            identifier: props.identifier,
            groupIdentifier: groupContext.identifier,
            index: props.index,
            isGroup,
            nextGroupIdentifier: hoveredNodeMeta.identifier,
        });
    }, [listContext.stackableAreaThreshold, listContext.onStackGroup, groupContext.identifier, props.identifier, props.index]);
    const onMoveForItems = React.useCallback((draggingNodeMeta, hoveredNodeMeta, absoluteXY) => {
        var _a, _b;
        if (isLonley) {
            listContext.setIsVisibleDropLineElement(false);
            listContext.destinationMetaRef.current = undefined;
            return;
        }
        if (draggingNodeMeta.index !== hoveredNodeMeta.index)
            listContext.setIsVisibleDropLineElement(true);
        const dropLineElement = (_a = listContext.dropLineElementRef.current) !== null && _a !== void 0 ? _a : undefined;
        item_1.setDropLineElementStyle(dropLineElement, absoluteXY, hoveredNodeMeta, listContext.direction);
        // Calculates the next index.
        const dropLineDirection = shared_1.getDropLineDirectionFromXY(absoluteXY, hoveredNodeMeta, listContext.direction);
        const nextIndex = item_1.getDropLinePositionItemIndex(dropLineDirection, draggingNodeMeta.index, draggingNodeMeta.groupIdentifier, hoveredNodeMeta.index, hoveredNodeMeta.groupIdentifier);
        // Calls callbacks if needed.
        const destinationMeta = listContext.destinationMetaRef.current;
        const isComeFromStackedGroup = destinationMeta != undefined && destinationMeta.groupIdentifier != undefined && destinationMeta.index == undefined;
        if (isComeFromStackedGroup) {
            (_b = listContext.onStackGroup) === null || _b === void 0 ? void 0 : _b.call(listContext, {
                identifier: props.identifier,
                groupIdentifier: groupContext.identifier,
                index: props.index,
                isGroup,
                nextGroupIdentifier: undefined,
            });
        }
        // Sets contexts to values.
        listContext.setStackedGroupIdentifier(undefined);
        listContext.destinationMetaRef.current = { groupIdentifier: groupContext.identifier, index: nextIndex };
    }, [
        listContext.direction,
        listContext.onStackGroup,
        groupContext.identifier,
        props.identifier,
        props.index,
        isGroup,
        isLonley,
    ]);
    const onMove = React.useCallback((absoluteXY) => {
        const draggingNodeMeta = listContext.draggingNodeMeta;
        if (draggingNodeMeta == undefined)
            return;
        const hoveredNodeMeta = listContext.hoveredNodeMetaRef.current;
        if (hoveredNodeMeta == undefined)
            return;
        const hasNoItems = childIdentifiersRef.current.size === 0;
        if (isGroup &&
            hasNoItems &&
            shared_1.checkIsInStackableArea(absoluteXY, hoveredNodeMeta, listContext.stackableAreaThreshold, listContext.direction)) {
            onMoveForStackableGroup(hoveredNodeMeta);
        }
        else {
            onMoveForItems(draggingNodeMeta, hoveredNodeMeta, absoluteXY);
        }
    }, [listContext.draggingNodeMeta, listContext.direction, onMoveForStackableGroup, onMoveForItems, isGroup]);
    const onLeave = React.useCallback(() => {
        if (listContext.draggingNodeMeta == undefined)
            return;
        // Clears a dragging node after 50ms in order to prevent setting and clearing at the same time.
        window.clearTimeout(clearingDraggingNodeTimeoutIdRef.current);
        clearingDraggingNodeTimeoutIdRef.current = window.setTimeout(() => {
            var _a;
            if (((_a = listContext.hoveredNodeMetaRef.current) === null || _a === void 0 ? void 0 : _a.identifier) !== props.identifier)
                return;
            listContext.setIsVisibleDropLineElement(false);
            listContext.setStackedGroupIdentifier(undefined);
            listContext.hoveredNodeMetaRef.current = undefined;
            listContext.destinationMetaRef.current = undefined;
        }, 50);
    }, [listContext.draggingNodeMeta, props.identifier]);
    const binder = react_use_gesture_1.useGesture({
        onHover: ({ event }) => {
            if (listContext.draggingNodeMeta == undefined)
                return;
            const element = event === null || event === void 0 ? void 0 : event.currentTarget;
            if (!(element instanceof HTMLElement))
                return;
            event === null || event === void 0 ? void 0 : event.stopPropagation();
            onHover(element);
        },
        onMove: ({ xy }) => {
            var _a, _b;
            if (listContext.draggingNodeMeta == undefined)
                return;
            // Skips if this item is an ancestor group of the dragging item.
            const hasItems = childIdentifiersRef.current.size > 0;
            const hoveredNodeAncestors = (_b = (_a = listContext.hoveredNodeMetaRef.current) === null || _a === void 0 ? void 0 : _a.ancestorIdentifiers) !== null && _b !== void 0 ? _b : [];
            if (hasItems && item_1.checkIsAncestorItem(props.identifier, hoveredNodeAncestors))
                return;
            if (props.identifier === listContext.draggingNodeMeta.identifier)
                return;
            // Skips if the dragging item is an ancestor group of this item.
            if (item_1.checkIsAncestorItem(listContext.draggingNodeMeta.identifier, ancestorIdentifiers))
                return;
            onMove(xy);
        },
        onPointerLeave: onLeave,
    });
    const dragHandlers = { onDragStart, onDrag, onDragEnd };
    const draggableBinder = react_use_gesture_1.useGesture({
        onDragStart: (state) => {
            if (isLocked)
                return;
            const event = state.event;
            event.persist();
            event.stopPropagation();
            dragHandlers.onDragStart();
        },
        onDrag: ({ down, movement }) => {
            if (isLocked)
                return;
            dragHandlers.onDrag(down, movement);
        },
        onDragEnd: () => {
            if (isLocked)
                return;
            dragHandlers.onDragEnd();
        },
    });
    const contentElement = React.useMemo(() => {
        const draggingNodeMeta = listContext.draggingNodeMeta;
        const isDragging = draggingNodeMeta != undefined && props.identifier === draggingNodeMeta.identifier;
        const { renderPlaceholder, renderStackedGroup, itemSpacing, direction } = listContext;
        const rendererMeta = {
            identifier: props.identifier,
            groupIdentifier: groupContext.identifier,
            index: props.index,
        };
        let children = props.children;
        if (isDragging && renderPlaceholder != undefined) {
            const style = item_1.getPlaceholderElementStyle(draggingNodeMeta, itemSpacing, direction);
            children = renderPlaceholder({ style }, Object.assign(Object.assign({}, rendererMeta), { isGroup }));
        }
        if (listContext.stackedGroupIdentifier === props.identifier && renderStackedGroup != undefined) {
            const style = item_1.getStackedGroupElementStyle(listContext.hoveredNodeMetaRef.current, itemSpacing, direction);
            children = renderStackedGroup({ style }, rendererMeta);
        }
        const padding = ["0", "0"];
        if (direction === "vertical")
            padding[0] = `${itemSpacing / 2}px`;
        if (direction === "horizontal")
            padding[1] = `${itemSpacing / 2}px`;
        return (React.createElement("div", Object.assign({ className: className, ref: wrapperElementRef, style: Object.assign(Object.assign({}, customStyle), { boxSizing: "border-box", position: "static", padding: padding.join(" ") }) }, binder(), (isUsedCustomDragHandlers ? {} : draggableBinder())), children));
    }, [
        listContext.draggingNodeMeta,
        listContext.renderPlaceholder,
        listContext.renderStackedGroup,
        listContext.stackedGroupIdentifier,
        listContext.itemSpacing,
        listContext.direction,
        groupContext.identifier,
        props.identifier,
        props.children,
        props.index,
        isGroup,
        isUsedCustomDragHandlers,
        binder,
        draggableBinder,
    ]);
    if (!isGroup)
        return React.createElement(item_1.ItemContext.Provider, { value: { isLocked, dragHandlers } }, contentElement);
    return (React.createElement(groups_1.GroupContext.Provider, { value: { identifier: props.identifier, ancestorIdentifiers, childIdentifiersRef } },
        React.createElement(item_1.ItemContext.Provider, { value: { isLocked, dragHandlers } }, contentElement)));
};
