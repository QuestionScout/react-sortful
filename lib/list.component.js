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
const list_1 = require("./list");
exports.List = (props) => {
    var _a, _b, _c, _d;
    const [draggingNodeMetaState, setDraggingNodeMetaState] = React.useState();
    const [isVisibleDropLineElementState, setIsVisibleDropLineElementState] = React.useState(false);
    const [stackedGroupIdentifierState, setStackedGroupIdentifierState] = React.useState();
    const itemSpacing = (_a = props.itemSpacing) !== null && _a !== void 0 ? _a : 8;
    const stackableAreaThreshold = (_b = props.stackableAreaThreshold) !== null && _b !== void 0 ? _b : 8;
    const direction = (_c = props.direction) !== null && _c !== void 0 ? _c : "vertical";
    const isDisabled = (_d = props.isDisabled) !== null && _d !== void 0 ? _d : false;
    const dropLineElementRef = React.useRef(null);
    const ghostWrapperElementRef = React.useRef(null);
    const hoveredNodeMetaRef = React.useRef();
    const destinationMetaRef = React.useRef();
    const dropLineElement = React.useMemo(() => {
        const style = {
            display: isVisibleDropLineElementState ? "block" : "none",
            position: "absolute",
            top: 0,
            left: 0,
            transform: direction === "vertical" ? "translate(0, -50%)" : "translate(-50%, 0)",
            pointerEvents: "none",
        };
        return props.renderDropLine({ ref: dropLineElementRef, style });
    }, [props.renderDropLine, isVisibleDropLineElementState, direction]);
    const ghostElement = React.useMemo(() => {
        if (draggingNodeMetaState == undefined)
            return;
        const { identifier, groupIdentifier, index, isGroup } = draggingNodeMetaState;
        return props.renderGhost({ identifier, groupIdentifier, index, isGroup });
    }, [props.renderGhost, draggingNodeMetaState]);
    const padding = ["0", "0"];
    if (direction === "vertical")
        padding[0] = `${itemSpacing}px`;
    if (direction === "horizontal")
        padding[1] = `${itemSpacing}px`;
    return (React.createElement(list_1.ListContext.Provider, { value: {
            itemSpacing,
            stackableAreaThreshold,
            draggingNodeMeta: draggingNodeMetaState,
            setDraggingNodeMeta: setDraggingNodeMetaState,
            dropLineElementRef,
            ghostWrapperElementRef,
            isVisibleDropLineElement: isVisibleDropLineElementState,
            setIsVisibleDropLineElement: setIsVisibleDropLineElementState,
            renderPlaceholder: props.renderPlaceholder,
            stackedGroupIdentifier: stackedGroupIdentifierState,
            setStackedGroupIdentifier: setStackedGroupIdentifierState,
            renderStackedGroup: props.renderStackedGroup,
            hoveredNodeMetaRef: hoveredNodeMetaRef,
            destinationMetaRef,
            direction,
            draggingCursorStyle: props.draggingCursorStyle,
            isDisabled,
            onDragStart: props.onDragStart,
            onDragEnd: props.onDragEnd,
            onStackGroup: props.onStackGroup,
        } },
        React.createElement("div", { className: props.className, style: { position: "relative", padding: padding.join(" ") } },
            props.children,
            dropLineElement,
            React.createElement("div", { ref: ghostWrapperElementRef, style: { position: "fixed", pointerEvents: "none" } }, ghostElement))));
};
