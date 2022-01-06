import {
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  DragEventHandler,
  TouchEventHandler,
  UIEventHandler,
  WheelEventHandler,
} from "react";
export type { TDOMAttributes, TBasicAttributes };

//TODO refer to interface DOMAttributes(@types/react)
type TDOMAttributes<T> = {
  // Focus Events
  onFocus?: FocusEventHandler<T> | undefined;
  onFocusCapture?: FocusEventHandler<T> | undefined;
  onBlur?: FocusEventHandler<T> | undefined;
  onBlurCapture?: FocusEventHandler<T> | undefined;

  // Keyboard Events
  onKeyDown?: KeyboardEventHandler<T> | undefined;
  onKeyDownCapture?: KeyboardEventHandler<T> | undefined;
  onKeyPress?: KeyboardEventHandler<T> | undefined;
  onKeyPressCapture?: KeyboardEventHandler<T> | undefined;
  onKeyUp?: KeyboardEventHandler<T> | undefined;
  onKeyUpCapture?: KeyboardEventHandler<T> | undefined;

  // MouseEvents
  onAuxClick?: MouseEventHandler<T> | undefined;
  onAuxClickCapture?: MouseEventHandler<T> | undefined;
  onClick?: MouseEventHandler<T> | undefined;
  onClickCapture?: MouseEventHandler<T> | undefined;
  onContextMenu?: MouseEventHandler<T> | undefined;
  onContextMenuCapture?: MouseEventHandler<T> | undefined;
  onDoubleClick?: MouseEventHandler<T> | undefined;
  onDoubleClickCapture?: MouseEventHandler<T> | undefined;
  onDrag?: DragEventHandler<T> | undefined;
  onDragCapture?: DragEventHandler<T> | undefined;
  onDragEnd?: DragEventHandler<T> | undefined;
  onDragEndCapture?: DragEventHandler<T> | undefined;
  onDragEnter?: DragEventHandler<T> | undefined;
  onDragEnterCapture?: DragEventHandler<T> | undefined;
  onDragExit?: DragEventHandler<T> | undefined;
  onDragExitCapture?: DragEventHandler<T> | undefined;
  onDragLeave?: DragEventHandler<T> | undefined;
  onDragLeaveCapture?: DragEventHandler<T> | undefined;
  onDragOver?: DragEventHandler<T> | undefined;
  onDragOverCapture?: DragEventHandler<T> | undefined;
  onDragStart?: DragEventHandler<T> | undefined;
  onDragStartCapture?: DragEventHandler<T> | undefined;
  onDrop?: DragEventHandler<T> | undefined;
  onDropCapture?: DragEventHandler<T> | undefined;
  onMouseDown?: MouseEventHandler<T> | undefined;
  onMouseDownCapture?: MouseEventHandler<T> | undefined;
  onMouseEnter?: MouseEventHandler<T> | undefined;
  onMouseLeave?: MouseEventHandler<T> | undefined;
  onMouseMove?: MouseEventHandler<T> | undefined;
  onMouseMoveCapture?: MouseEventHandler<T> | undefined;
  onMouseOut?: MouseEventHandler<T> | undefined;
  onMouseOutCapture?: MouseEventHandler<T> | undefined;
  onMouseOver?: MouseEventHandler<T> | undefined;
  onMouseOverCapture?: MouseEventHandler<T> | undefined;
  onMouseUp?: MouseEventHandler<T> | undefined;
  onMouseUpCapture?: MouseEventHandler<T> | undefined;

  // Touch Events
  onTouchCancel?: TouchEventHandler<T> | undefined;
  onTouchCancelCapture?: TouchEventHandler<T> | undefined;
  onTouchEnd?: TouchEventHandler<T> | undefined;
  onTouchEndCapture?: TouchEventHandler<T> | undefined;
  onTouchMove?: TouchEventHandler<T> | undefined;
  onTouchMoveCapture?: TouchEventHandler<T> | undefined;
  onTouchStart?: TouchEventHandler<T> | undefined;
  onTouchStartCapture?: TouchEventHandler<T> | undefined;

  // UI Events
  onScroll?: UIEventHandler<T> | undefined;
  onScrollCapture?: UIEventHandler<T> | undefined;

  // Wheel Events
  onWheel?: WheelEventHandler<T> | undefined;
  onWheelCapture?: WheelEventHandler<T> | undefined;
};

//TODO refer to interface HTMLAttributes(@types/react)
type TBasicAttributes = {
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  title?: string;
};
