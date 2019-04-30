import { Control } from "./control";
import { Measure } from "../measure";
import { Nullable } from "babylonjs";
import { AdvancedDynamicTexture } from "../advancedDynamicTexture";
/**
 * Root class for 2D containers
 * @see http://doc.babylonjs.com/how_to/gui#containers
 */
export declare class Container extends Control {
    name?: string | undefined;
    /** @hidden */
    protected _children: Control[];
    /** @hidden */
    protected _measureForChildren: Measure;
    /** @hidden */
    protected _background: string;
    /** @hidden */
    protected _adaptWidthToChildren: boolean;
    /** @hidden */
    protected _adaptHeightToChildren: boolean;
    /** Gets or sets a boolean indicating if the container should try to adapt to its children height */
    adaptHeightToChildren: boolean;
    /** Gets or sets a boolean indicating if the container should try to adapt to its children width */
    adaptWidthToChildren: boolean;
    /** Gets or sets background color */
    background: string;
    /** Gets the list of children */
    readonly children: Control[];
    /**
     * Creates a new Container
     * @param name defines the name of the container
     */
    constructor(name?: string | undefined);
    protected _getTypeName(): string;
    _flagDescendantsAsMatrixDirty(): void;
    /**
     * Gets a child using its name
     * @param name defines the child name to look for
     * @returns the child control if found
     */
    getChildByName(name: string): Nullable<Control>;
    /**
     * Gets a child using its type and its name
     * @param name defines the child name to look for
     * @param type defines the child type to look for
     * @returns the child control if found
     */
    getChildByType(name: string, type: string): Nullable<Control>;
    /**
     * Search for a specific control in children
     * @param control defines the control to look for
     * @returns true if the control is in child list
     */
    containsControl(control: Control): boolean;
    /**
     * Adds a new control to the current container
     * @param control defines the control to add
     * @returns the current container
     */
    addControl(control: Nullable<Control>): Container;
    /**
     * Removes all controls from the current container
     * @returns the current container
     */
    clearControls(): Container;
    /**
     * Removes a control from the current container
     * @param control defines the control to remove
     * @returns the current container
     */
    removeControl(control: Control): Container;
    /** @hidden */
    _reOrderControl(control: Control): void;
    /** @hidden */
    _offsetLeft(offset: number): void;
    /** @hidden */
    _offsetTop(offset: number): void;
    /** @hidden */
    _markAllAsDirty(): void;
    /** @hidden */
    protected _localDraw(context: CanvasRenderingContext2D): void;
    /** @hidden */
    _link(host: AdvancedDynamicTexture): void;
    /** @hidden */
    protected _beforeLayout(): void;
    /** @hidden */
    protected _processMeasures(parentMeasure: Measure, context: CanvasRenderingContext2D): void;
    /** @hidden */
    _layout(parentMeasure: Measure, context: CanvasRenderingContext2D): boolean;
    protected _postMeasure(): void;
    /** @hidden */
    _draw(context: CanvasRenderingContext2D, invalidatedRectangle?: Measure): void;
    /** @hidden */
    _getDescendants(results: Control[], directDescendantsOnly?: boolean, predicate?: (control: Control) => boolean): void;
    /** @hidden */
    _processPicking(x: number, y: number, type: number, pointerId: number, buttonIndex: number): boolean;
    /** @hidden */
    protected _additionalProcessing(parentMeasure: Measure, context: CanvasRenderingContext2D): void;
    /** Releases associated resources */
    dispose(): void;
}
