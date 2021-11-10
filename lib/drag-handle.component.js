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
const item_1 = require("./item");
exports.DragHandleComponent = (props) => {
    const itemContext = React.useContext(item_1.ItemContext);
    // Checks `props.children` has one React node.
    React.useEffect(() => {
        React.Children.only(props.children);
    }, [props.children]);
    const draggableBinder = react_use_gesture_1.useGesture({
        onDragStart: (state) => {
            if (itemContext.isLocked)
                return;
            const event = state.event;
            event.persist();
            event.stopPropagation();
            itemContext.dragHandlers.onDragStart();
        },
        onDrag: ({ down, movement }) => {
            if (itemContext.isLocked)
                return;
            itemContext.dragHandlers.onDrag(down, movement);
        },
        onDragEnd: () => {
            if (itemContext.isLocked)
                return;
            itemContext.dragHandlers.onDragEnd();
        },
    });
    return (React.createElement("div", Object.assign({ className: props.className }, draggableBinder()), props.children));
};
