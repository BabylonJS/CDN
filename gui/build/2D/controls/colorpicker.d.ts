import { Control } from "./control";
import { Color3, Observable, Vector2 } from "babylonjs";
import { Measure } from "../measure";
import { AdvancedDynamicTexture } from "../advancedDynamicTexture";
/** Class used to create color pickers */
export declare class ColorPicker extends Control {
    name?: string | undefined;
    private static _Epsilon;
    private _colorWheelCanvas;
    private _value;
    private _tmpColor;
    private _pointerStartedOnSquare;
    private _pointerStartedOnWheel;
    private _squareLeft;
    private _squareTop;
    private _squareSize;
    private _h;
    private _s;
    private _v;
    /**
     * Observable raised when the value changes
     */
    onValueChangedObservable: Observable<Color3>;
    /** Gets or sets the color of the color picker */
    value: Color3;
    /**
     * Gets or sets control width
     * @see http://doc.babylonjs.com/how_to/gui#position-and-size
     */
    width: string | number;
    /**
     * Gets or sets control height
     * @see http://doc.babylonjs.com/how_to/gui#position-and-size
     */
    /** Gets or sets control height */
    height: string | number;
    /** Gets or sets control size */
    size: string | number;
    /**
     * Creates a new ColorPicker
     * @param name defines the control name
     */
    constructor(name?: string | undefined);
    protected _getTypeName(): string;
    /** @hidden */
    protected _preMeasure(parentMeasure: Measure, context: CanvasRenderingContext2D): void;
    private _updateSquareProps;
    private _drawGradientSquare;
    private _drawCircle;
    private _createColorWheelCanvas;
    private _RGBtoHSV;
    private _HSVtoRGB;
    /** @hidden */
    _draw(context: CanvasRenderingContext2D): void;
    private _pointerIsDown;
    private _updateValueFromPointer;
    private _isPointOnSquare;
    private _isPointOnWheel;
    _onPointerDown(target: Control, coordinates: Vector2, pointerId: number, buttonIndex: number): boolean;
    _onPointerMove(target: Control, coordinates: Vector2): void;
    _onPointerUp(target: Control, coordinates: Vector2, pointerId: number, buttonIndex: number, notifyClick: boolean): void;
    /**
     * This function expands the color picker by creating a color picker dialog with manual
     * color value input and the ability to save colors into an array to be used later in
     * subsequent launches of the dialogue.
     * @param advancedTexture defines the AdvancedDynamicTexture the dialog is assigned to
     * @param options defines size for dialog and options for saved colors. Also accepts last color picked as hex string and saved colors array as hex strings.
     * @returns picked color as a hex string and the saved colors array as hex strings.
     */
    static ShowPickerDialogAsync(advancedTexture: AdvancedDynamicTexture, options: {
        pickerWidth?: string;
        pickerHeight?: string;
        headerHeight?: string;
        lastColor?: string;
        swatchLimit?: number;
        numSwatchesPerLine?: number;
        savedColors?: Array<string>;
    }): Promise<{
        savedColors?: string[];
        pickedColor: string;
    }>;
}
