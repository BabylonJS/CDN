import { MultiLine } from "./controls/multiLine";
import { Control } from "./controls/control";
import { AbstractMesh, Nullable, Vector2 } from "babylonjs";
/**
 * Class used to store a point for a MultiLine object.
 * The point can be pure 2D coordinates, a mesh or a control
 */
export declare class MultiLinePoint {
    private _multiLine;
    private _x;
    private _y;
    private _control;
    private _mesh;
    private _controlObserver;
    private _meshObserver;
    /** @hidden */
    _point: Vector2;
    /**
     * Creates a new MultiLinePoint
     * @param multiLine defines the source MultiLine object
     */
    constructor(multiLine: MultiLine);
    /** Gets or sets x coordinate */
    x: string | number;
    /** Gets or sets y coordinate */
    y: string | number;
    /** Gets or sets the control associated with this point */
    control: Nullable<Control>;
    /** Gets or sets the mesh associated with this point */
    mesh: Nullable<AbstractMesh>;
    /** Resets links */
    resetLinks(): void;
    /**
     * Gets a translation vector
     * @returns the translation vector
     */
    translate(): Vector2;
    private _translatePoint;
    /** Release associated resources */
    dispose(): void;
}
