import { BaseSlider } from "./baseSlider";
import { Control } from "..";
import { Vector2 } from "babylonjs";
/**
 * Class used to create slider controls
 */
export declare class ScrollBar extends BaseSlider {
    name?: string | undefined;
    private _background;
    private _borderColor;
    private _thumbMeasure;
    /** Gets or sets border color */
    borderColor: string;
    /** Gets or sets background color */
    background: string;
    /**
     * Creates a new Slider
     * @param name defines the control name
     */
    constructor(name?: string | undefined);
    protected _getTypeName(): string;
    protected _getThumbThickness(): number;
    _draw(context: CanvasRenderingContext2D): void;
    private _first;
    private _originX;
    private _originY;
    /** @hidden */
    protected _updateValueFromPointer(x: number, y: number): void;
    _onPointerDown(target: Control, coordinates: Vector2, pointerId: number, buttonIndex: number): boolean;
}
