import * as React from "react";
export declare const Context: React.Context<{
    isLocked: boolean;
    dragHandlers: {
        onDragStart: () => void;
        onDrag: (isDown: boolean, absoluteXY: [number, number]) => void;
        onDragEnd: () => void;
    };
}>;
