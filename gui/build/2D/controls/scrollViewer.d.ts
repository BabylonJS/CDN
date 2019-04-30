import { Measure } from "../measure";
import { Rectangle } from "./rectangle";
import { Control } from "./control";
/**
 * Class used to hold a viewer window and sliders in a grid
*/
export declare class ScrollViewer extends Rectangle {
    /** name of ScrollViewer */
    name?: string | undefined;
    private _grid;
    private _horizontalBarSpace;
    private _verticalBarSpace;
    private _dragSpace;
    private _horizontalBar;
    private _verticalBar;
    private _barColor;
    private _barBorderColor;
    private _barBackground;
    private _scrollGridWidth;
    private _scrollGridHeight;
    private _widthScale;
    private _heightScale;
    private _endLeft;
    private _endTop;
    private _window;
    private _windowContents;
    private _pointerIsOver;
    private _wheelPrecision;
    private _onPointerObserver;
    /**
     * Adds windowContents to the grid view window
     * @param windowContents the contents to add the grid view window
     */
    addToWindow(windowContents: Control): void;
    /**
     * Gets or sets a value indicating the padding to use on the left of the viewer window
     * @see http://doc.babylonjs.com/how_to/gui#position-and-size
     */
    paddingLeft: string | number;
    /**
     * Gets a value indicating the padding in pixels to use on the left of the viewer window
     * @see http://doc.babylonjs.com/how_to/gui#position-and-size
     */
    readonly paddingLeftInPixels: number;
    /**
     * Gets or sets a value indicating the padding to use on the right of the viewer window
     * @see http://doc.babylonjs.com/how_to/gui#position-and-size
     */
    paddingRight: string | number;
    /**
     * Gets a value indicating the padding in pixels to use on the right of the viewer window
     * @see http://doc.babylonjs.com/how_to/gui#position-and-size
     */
    readonly paddingRightInPixels: number;
    /**
     * Gets or sets a value indicating the padding to use on the top of the viewer window
     * @see http://doc.babylonjs.com/how_to/gui#position-and-size
     */
    paddingTop: string | number;
    /**
     * Gets a value indicating the padding in pixels to use on the top of the viewer window
     * @see http://doc.babylonjs.com/how_to/gui#position-and-size
     */
    readonly paddingTopInPixels: number;
    /**
     * Gets or sets a value indicating the padding to use on the bottom of the viewer window
     * @see http://doc.babylonjs.com/how_to/gui#position-and-size
     */
    paddingBottom: string | number;
    /**
     * Gets a value indicating the padding in pixels to use on the bottom of the viewer window
     * @see http://doc.babylonjs.com/how_to/gui#position-and-size
     */
    readonly paddingBottomInPixels: number;
    /**
    * Creates a new ScrollViewer
    * @param name of ScrollViewer
    */
    constructor(
    /** name of ScrollViewer */
    name?: string | undefined);
    /**
     * Gets or sets the mouse wheel precision
     * from 0 to 1 with a default value of 0.05
     * */
    wheelPrecision: number;
    /** Gets or sets the bar color */
    barColor: string;
    /** Gets or sets the bar color */
    barBorderColor: string;
    /** Gets or sets the bar background */
    barBackground: string;
    /** @hidden */
    protected _additionalProcessing(parentMeasure: Measure, context: CanvasRenderingContext2D): void;
    /** @hidden */
    private _updateScroller;
    /** @hidden */
    private _updateTextBlock;
    /** @hidden */
    private _attachWheel;
    /** Releases associated resources */
    dispose(): void;
}
