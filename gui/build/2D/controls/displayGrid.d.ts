import { Control } from ".";
/** Class used to render a grid  */
export declare class DisplayGrid extends Control {
    name?: string | undefined;
    private _cellWidth;
    private _cellHeight;
    private _minorLineTickness;
    private _minorLineColor;
    private _majorLineTickness;
    private _majorLineColor;
    private _majorLineFrequency;
    private _background;
    private _displayMajorLines;
    private _displayMinorLines;
    /** Gets or sets a boolean indicating if minor lines must be rendered (true by default)) */
    displayMinorLines: boolean;
    /** Gets or sets a boolean indicating if major lines must be rendered (true by default)) */
    displayMajorLines: boolean;
    /** Gets or sets background color (Black by default) */
    background: string;
    /** Gets or sets the width of each cell (20 by default) */
    cellWidth: number;
    /** Gets or sets the height of each cell (20 by default) */
    cellHeight: number;
    /** Gets or sets the tickness of minor lines (1 by default) */
    minorLineTickness: number;
    /** Gets or sets the color of minor lines (DarkGray by default) */
    minorLineColor: string;
    /** Gets or sets the tickness of major lines (2 by default) */
    majorLineTickness: number;
    /** Gets or sets the color of major lines (White by default) */
    majorLineColor: string;
    /** Gets or sets the frequency of major lines (default is 1 every 5 minor lines)*/
    majorLineFrequency: number;
    /**
     * Creates a new GridDisplayRectangle
     * @param name defines the control name
     */
    constructor(name?: string | undefined);
    _draw(context: CanvasRenderingContext2D): void;
    protected _getTypeName(): string;
}
