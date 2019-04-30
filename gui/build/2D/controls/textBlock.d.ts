import { Observable } from "babylonjs";
import { Measure } from "../measure";
import { Control } from "./control";
/**
 * Enum that determines the text-wrapping mode to use.
 */
export declare enum TextWrapping {
    /**
     * Clip the text when it's larger than Control.width; this is the default mode.
     */
    Clip = 0,
    /**
     * Wrap the text word-wise, i.e. try to add line-breaks at word boundary to fit within Control.width.
     */
    WordWrap = 1,
    /**
     * Ellipsize the text, i.e. shrink with trailing … when text is larger than Control.width.
     */
    Ellipsis = 2
}
/**
 * Class used to create text block control
 */
export declare class TextBlock extends Control {
    /**
     * Defines the name of the control
     */
    name?: string | undefined;
    private _text;
    private _textWrapping;
    private _textHorizontalAlignment;
    private _textVerticalAlignment;
    private _lines;
    private _resizeToFit;
    private _lineSpacing;
    private _outlineWidth;
    private _outlineColor;
    /**
    * An event triggered after the text is changed
    */
    onTextChangedObservable: Observable<TextBlock>;
    /**
    * An event triggered after the text was broken up into lines
    */
    onLinesReadyObservable: Observable<TextBlock>;
    /**
     * Return the line list (you may need to use the onLinesReadyObservable to make sure the list is ready)
     */
    readonly lines: any[];
    /**
     * Gets or sets an boolean indicating that the TextBlock will be resized to fit container
     */
    /**
    * Gets or sets an boolean indicating that the TextBlock will be resized to fit container
    */
    resizeToFit: boolean;
    /**
     * Gets or sets a boolean indicating if text must be wrapped
     */
    /**
    * Gets or sets a boolean indicating if text must be wrapped
    */
    textWrapping: TextWrapping | boolean;
    /**
     * Gets or sets text to display
     */
    /**
    * Gets or sets text to display
    */
    text: string;
    /**
     * Gets or sets text horizontal alignment (BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER by default)
     */
    /**
    * Gets or sets text horizontal alignment (BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER by default)
    */
    textHorizontalAlignment: number;
    /**
     * Gets or sets text vertical alignment (BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER by default)
     */
    /**
    * Gets or sets text vertical alignment (BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER by default)
    */
    textVerticalAlignment: number;
    /**
     * Gets or sets line spacing value
     */
    /**
    * Gets or sets line spacing value
    */
    lineSpacing: string | number;
    /**
     * Gets or sets outlineWidth of the text to display
     */
    /**
    * Gets or sets outlineWidth of the text to display
    */
    outlineWidth: number;
    /**
     * Gets or sets outlineColor of the text to display
     */
    /**
    * Gets or sets outlineColor of the text to display
    */
    outlineColor: string;
    /**
     * Creates a new TextBlock object
     * @param name defines the name of the control
     * @param text defines the text to display (emptry string by default)
     */
    constructor(
    /**
     * Defines the name of the control
     */
    name?: string | undefined, text?: string);
    protected _getTypeName(): string;
    protected _processMeasures(parentMeasure: Measure, context: CanvasRenderingContext2D): void;
    private _drawText;
    /** @hidden */
    _draw(context: CanvasRenderingContext2D): void;
    protected _applyStates(context: CanvasRenderingContext2D): void;
    protected _breakLines(refWidth: number, context: CanvasRenderingContext2D): object[];
    protected _parseLine(line: string | undefined, context: CanvasRenderingContext2D): object;
    protected _parseLineEllipsis(line: string | undefined, width: number, context: CanvasRenderingContext2D): object;
    protected _parseLineWordWrap(line: string | undefined, width: number, context: CanvasRenderingContext2D): object[];
    protected _renderLines(context: CanvasRenderingContext2D): void;
    /**
     * Given a width constraint applied on the text block, find the expected height
     * @returns expected height
     */
    computeExpectedHeight(): number;
    dispose(): void;
}
