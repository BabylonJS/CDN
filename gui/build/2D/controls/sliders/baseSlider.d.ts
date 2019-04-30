import { Control } from "../control";
import { ValueAndUnit } from "../../valueAndUnit";
import { Observable, Vector2 } from "babylonjs";
/**
 * Class used to create slider controls
 */
export declare class BaseSlider extends Control {
    name?: string | undefined;
    protected _thumbWidth: ValueAndUnit;
    private _minimum;
    private _maximum;
    private _value;
    private _isVertical;
    protected _barOffset: ValueAndUnit;
    private _isThumbClamped;
    protected _displayThumb: boolean;
    protected _effectiveBarOffset: number;
    protected _renderLeft: number;
    protected _renderTop: number;
    protected _renderWidth: number;
    protected _renderHeight: number;
    protected _backgroundBoxLength: number;
    protected _backgroundBoxThickness: number;
    protected _effectiveThumbThickness: number;
    /** Observable raised when the sldier value changes */
    onValueChangedObservable: Observable<number>;
    /** Gets or sets a boolean indicating if the thumb must be rendered */
    displayThumb: boolean;
    /** Gets or sets main bar offset (ie. the margin applied to the value bar) */
    barOffset: string | number;
    /** Gets main bar offset in pixels*/
    readonly barOffsetInPixels: number;
    /** Gets or sets thumb width */
    thumbWidth: string | number;
    /** Gets thumb width in pixels */
    readonly thumbWidthInPixels: number;
    /** Gets or sets minimum value */
    minimum: number;
    /** Gets or sets maximum value */
    maximum: number;
    /** Gets or sets current value */
    value: number;
    /**Gets or sets a boolean indicating if the slider should be vertical or horizontal */
    isVertical: boolean;
    /** Gets or sets a value indicating if the thumb can go over main bar extends */
    isThumbClamped: boolean;
    /**
     * Creates a new BaseSlider
     * @param name defines the control name
     */
    constructor(name?: string | undefined);
    protected _getTypeName(): string;
    protected _getThumbPosition(): number;
    protected _getThumbThickness(type: string): number;
    protected _prepareRenderingData(type: string): void;
    private _pointerIsDown;
    /** @hidden */
    protected _updateValueFromPointer(x: number, y: number): void;
    _onPointerDown(target: Control, coordinates: Vector2, pointerId: number, buttonIndex: number): boolean;
    _onPointerMove(target: Control, coordinates: Vector2): void;
    _onPointerUp(target: Control, coordinates: Vector2, pointerId: number, buttonIndex: number, notifyClick: boolean): void;
}
