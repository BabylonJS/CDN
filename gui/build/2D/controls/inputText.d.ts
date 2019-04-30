import { Control } from "./control";
import { IFocusableControl } from "../advancedDynamicTexture";
import { Nullable, Observable, Vector2 } from 'babylonjs';
import { VirtualKeyboard } from "./virtualKeyboard";
/**
 * Class used to create input text control
 */
export declare class InputText extends Control implements IFocusableControl {
    name?: string | undefined;
    private _text;
    private _placeholderText;
    private _background;
    private _focusedBackground;
    private _focusedColor;
    private _placeholderColor;
    private _thickness;
    private _margin;
    private _autoStretchWidth;
    private _maxWidth;
    private _isFocused;
    private _blinkTimeout;
    private _blinkIsEven;
    private _cursorOffset;
    private _scrollLeft;
    private _textWidth;
    private _clickedCoordinate;
    private _deadKey;
    private _addKey;
    private _currentKey;
    private _isTextHighlightOn;
    private _textHighlightColor;
    private _highligherOpacity;
    private _highlightedText;
    private _startHighlightIndex;
    private _endHighlightIndex;
    private _cursorIndex;
    private _onFocusSelectAll;
    private _isPointerDown;
    private _onClipboardObserver;
    private _onPointerDblTapObserver;
    /** @hidden */
    _connectedVirtualKeyboard: Nullable<VirtualKeyboard>;
    /** Gets or sets a string representing the message displayed on mobile when the control gets the focus */
    promptMessage: string;
    /** Observable raised when the text changes */
    onTextChangedObservable: Observable<InputText>;
    /** Observable raised just before an entered character is to be added */
    onBeforeKeyAddObservable: Observable<InputText>;
    /** Observable raised when the control gets the focus */
    onFocusObservable: Observable<InputText>;
    /** Observable raised when the control loses the focus */
    onBlurObservable: Observable<InputText>;
    /**Observable raised when the text is highlighted */
    onTextHighlightObservable: Observable<InputText>;
    /**Observable raised when copy event is triggered */
    onTextCopyObservable: Observable<InputText>;
    /** Observable raised when cut event is triggered */
    onTextCutObservable: Observable<InputText>;
    /** Observable raised when paste event is triggered */
    onTextPasteObservable: Observable<InputText>;
    /** Observable raised when a key event was processed */
    onKeyboardEventProcessedObservable: Observable<KeyboardEvent>;
    /** Gets or sets the maximum width allowed by the control */
    maxWidth: string | number;
    /** Gets the maximum width allowed by the control in pixels */
    readonly maxWidthInPixels: number;
    /** Gets or sets the text highlighter transparency; default: 0.4 */
    highligherOpacity: number;
    /** Gets or sets a boolean indicating whether to select complete text by default on input focus */
    onFocusSelectAll: boolean;
    /** Gets or sets the text hightlight color */
    textHighlightColor: string;
    /** Gets or sets control margin */
    margin: string;
    /** Gets control margin in pixels */
    readonly marginInPixels: number;
    /** Gets or sets a boolean indicating if the control can auto stretch its width to adapt to the text */
    autoStretchWidth: boolean;
    /** Gets or sets border thickness */
    thickness: number;
    /** Gets or sets the background color when focused */
    focusedBackground: string;
    /** Gets or sets the background color when focused */
    focusedColor: string;
    /** Gets or sets the background color */
    background: string;
    /** Gets or sets the placeholder color */
    placeholderColor: string;
    /** Gets or sets the text displayed when the control is empty */
    placeholderText: string;
    /** Gets or sets the dead key flag */
    deadKey: boolean;
    /** Gets or sets the highlight text */
    highlightedText: string;
    /** Gets or sets if the current key should be added */
    addKey: boolean;
    /** Gets or sets the value of the current key being entered */
    currentKey: string;
    /** Gets or sets the text displayed in the control */
    text: string;
    /** Gets or sets control width */
    width: string | number;
    /**
     * Creates a new InputText
     * @param name defines the control name
     * @param text defines the text of the control
     */
    constructor(name?: string | undefined, text?: string);
    /** @hidden */
    onBlur(): void;
    /** @hidden */
    onFocus(): void;
    protected _getTypeName(): string;
    /**
     * Function called to get the list of controls that should not steal the focus from this control
     * @returns an array of controls
     */
    keepsFocusWith(): Nullable<Control[]>;
    /** @hidden */
    processKey(keyCode: number, key?: string, evt?: KeyboardEvent): void;
    /** @hidden */
    private _updateValueFromCursorIndex;
    /** @hidden */
    private _processDblClick;
    /** @hidden */
    private _selectAllText;
    /**
     * Handles the keyboard event
     * @param evt Defines the KeyboardEvent
     */
    processKeyboard(evt: KeyboardEvent): void;
    /** @hidden */
    private _onCopyText;
    /** @hidden */
    private _onCutText;
    /** @hidden */
    private _onPasteText;
    _draw(context: CanvasRenderingContext2D): void;
    _onPointerDown(target: Control, coordinates: Vector2, pointerId: number, buttonIndex: number): boolean;
    _onPointerMove(target: Control, coordinates: Vector2): void;
    _onPointerUp(target: Control, coordinates: Vector2, pointerId: number, buttonIndex: number, notifyClick: boolean): void;
    protected _beforeRenderText(text: string): string;
    dispose(): void;
}
