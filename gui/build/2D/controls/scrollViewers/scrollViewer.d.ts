import { Rectangle } from "../rectangle";
import { Control } from "../control";
import { Container } from "../container";
import { Nullable } from "babylonjs";
import { Measure } from "../../measure";
import { AdvancedDynamicTexture } from "../../advancedDynamicTexture";
import { ScrollBar } from "../sliders/scrollBar";
/**
 * Class used to hold a viewer window and sliders in a grid
*/
export declare class ScrollViewer extends Rectangle {
    private _grid;
    private _horizontalBarSpace;
    private _verticalBarSpace;
    private _dragSpace;
    private _horizontalBar;
    private _verticalBar;
    private _barColor;
    private _barBackground;
    private _barSize;
    private _endLeft;
    private _endTop;
    private _window;
    private _pointerIsOver;
    private _wheelPrecision;
    private _onPointerObserver;
    private _clientWidth;
    private _clientHeight;
    /**
     * Gets the horizontal scrollbar
     */
    readonly horizontalBar: ScrollBar;
    /**
     * Gets the vertical scrollbar
     */
    readonly verticalBar: ScrollBar;
    /**
     * Adds a new control to the current container
     * @param control defines the control to add
     * @returns the current container
     */
    addControl(control: Nullable<Control>): Container;
    /**
     * Removes a control from the current container
     * @param control defines the control to remove
     * @returns the current container
     */
    removeControl(control: Control): Container;
    /** Gets the list of children */
    readonly children: Control[];
    _flagDescendantsAsMatrixDirty(): void;
    /**
    * Creates a new ScrollViewer
    * @param name of ScrollViewer
    */
    constructor(name?: string);
    /** Reset the scroll viewer window to initial size */
    resetWindow(): void;
    protected _getTypeName(): string;
    private _buildClientSizes;
    protected _additionalProcessing(parentMeasure: Measure, context: CanvasRenderingContext2D): void;
    protected _postMeasure(): void;
    /**
     * Gets or sets the mouse wheel precision
     * from 0 to 1 with a default value of 0.05
     * */
    wheelPrecision: number;
    /** Gets or sets the bar color */
    barColor: string;
    /** Gets or sets the size of the bar */
    barSize: number;
    /** Gets or sets the bar background */
    barBackground: string;
    /** @hidden */
    private _updateScroller;
    _link(host: AdvancedDynamicTexture): void;
    /** @hidden */
    private _attachWheel;
    _renderHighlightSpecific(context: CanvasRenderingContext2D): void;
    /** Releases associated resources */
    dispose(): void;
}
