import { Control } from "./control";
import { Vector3, Scene } from "babylonjs";
import { Measure } from "../measure";
/** Class used to render 2D lines */
export declare class Line extends Control {
    name?: string | undefined;
    private _lineWidth;
    private _x1;
    private _y1;
    private _x2;
    private _y2;
    private _dash;
    private _connectedControl;
    private _connectedControlDirtyObserver;
    /** Gets or sets the dash pattern */
    dash: Array<number>;
    /** Gets or sets the control connected with the line end */
    connectedControl: Control;
    /** Gets or sets start coordinates on X axis */
    x1: string | number;
    /** Gets or sets start coordinates on Y axis */
    y1: string | number;
    /** Gets or sets end coordinates on X axis */
    x2: string | number;
    /** Gets or sets end coordinates on Y axis */
    y2: string | number;
    /** Gets or sets line width */
    lineWidth: number;
    /** Gets or sets horizontal alignment */
    horizontalAlignment: number;
    /** Gets or sets vertical alignment */
    verticalAlignment: number;
    private readonly _effectiveX2;
    private readonly _effectiveY2;
    /**
     * Creates a new Line
     * @param name defines the control name
     */
    constructor(name?: string | undefined);
    protected _getTypeName(): string;
    _draw(context: CanvasRenderingContext2D): void;
    _measure(): void;
    protected _computeAlignment(parentMeasure: Measure, context: CanvasRenderingContext2D): void;
    /**
     * Move one end of the line given 3D cartesian coordinates.
     * @param position Targeted world position
     * @param scene Scene
     * @param end (opt) Set to true to assign x2 and y2 coordinates of the line. Default assign to x1 and y1.
     */
    moveToVector3(position: Vector3, scene: Scene, end?: boolean): void;
    /**
     * Move one end of the line to a position in screen absolute space.
     * @param projectedPosition Position in screen absolute space (X, Y)
     * @param end (opt) Set to true to assign x2 and y2 coordinates of the line. Default assign to x1 and y1.
     */
    _moveToProjectedPosition(projectedPosition: Vector3, end?: boolean): void;
}
