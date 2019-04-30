import { Control } from "./control";
import { Observable, Vector2 } from "babylonjs";
import { StackPanel } from "./stackPanel";
/**
 * Class used to represent a 2D checkbox
 */
export declare class Checkbox extends Control {
    name?: string | undefined;
    private _isChecked;
    private _background;
    private _checkSizeRatio;
    private _thickness;
    /** Gets or sets border thickness  */
    thickness: number;
    /**
     * Observable raised when isChecked property changes
     */
    onIsCheckedChangedObservable: Observable<boolean>;
    /** Gets or sets a value indicating the ratio between overall size and check size */
    checkSizeRatio: number;
    /** Gets or sets background color */
    background: string;
    /** Gets or sets a boolean indicating if the checkbox is checked or not */
    isChecked: boolean;
    /**
     * Creates a new CheckBox
     * @param name defines the control name
     */
    constructor(name?: string | undefined);
    protected _getTypeName(): string;
    /** @hidden */
    _draw(context: CanvasRenderingContext2D): void;
    /** @hidden */
    _onPointerDown(target: Control, coordinates: Vector2, pointerId: number, buttonIndex: number): boolean;
    /**
     * Utility function to easily create a checkbox with a header
     * @param title defines the label to use for the header
     * @param onValueChanged defines the callback to call when value changes
     * @returns a StackPanel containing the checkbox and a textBlock
     */
    static AddCheckBoxWithHeader(title: string, onValueChanged: (value: boolean) => void): StackPanel;
}
