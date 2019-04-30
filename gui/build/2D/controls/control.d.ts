import { Container } from "./container";
import { AdvancedDynamicTexture } from "../advancedDynamicTexture";
import { ValueAndUnit } from "../valueAndUnit";
import { Nullable, Vector2, AbstractMesh, Observable, Vector3, Scene } from "babylonjs";
import { Measure } from "../measure";
import { Style } from "../style";
import { Matrix2D, Vector2WithInfo } from "../math2D";
/**
 * Root class used for all 2D controls
 * @see http://doc.babylonjs.com/how_to/gui#controls
 */
export declare class Control {
    /** defines the name of the control */
    name?: string | undefined;
    /**
     * Gets or sets a boolean indicating if alpha must be an inherited value (false by default)
     */
    static AllowAlphaInheritance: boolean;
    private _alpha;
    private _alphaSet;
    private _zIndex;
    /** @hidden */
    _host: AdvancedDynamicTexture;
    /** Gets or sets the control parent */
    parent: Nullable<Container>;
    /** @hidden */
    _currentMeasure: Measure;
    private _fontFamily;
    private _fontStyle;
    private _fontWeight;
    private _fontSize;
    private _font;
    /** @hidden */
    _width: ValueAndUnit;
    /** @hidden */
    _height: ValueAndUnit;
    /** @hidden */
    protected _fontOffset: {
        ascent: number;
        height: number;
        descent: number;
    };
    private _color;
    private _style;
    private _styleObserver;
    /** @hidden */
    protected _horizontalAlignment: number;
    /** @hidden */
    protected _verticalAlignment: number;
    /** @hidden */
    protected _isDirty: boolean;
    /** @hidden */
    protected _wasDirty: boolean;
    /** @hidden */
    _tempParentMeasure: Measure;
    /** @hidden */
    _tempCurrentMeasure: Measure;
    /** @hidden */
    protected _cachedParentMeasure: Measure;
    private _paddingLeft;
    private _paddingRight;
    private _paddingTop;
    private _paddingBottom;
    /** @hidden */
    _left: ValueAndUnit;
    /** @hidden */
    _top: ValueAndUnit;
    private _scaleX;
    private _scaleY;
    private _rotation;
    private _transformCenterX;
    private _transformCenterY;
    private _transformMatrix;
    /** @hidden */
    protected _invertTransformMatrix: Matrix2D;
    /** @hidden */
    protected _transformedPosition: Vector2;
    private _isMatrixDirty;
    private _cachedOffsetX;
    private _cachedOffsetY;
    private _isVisible;
    private _isHighlighted;
    /** @hidden */
    _linkedMesh: Nullable<AbstractMesh>;
    private _fontSet;
    private _dummyVector2;
    private _downCount;
    private _enterCount;
    private _doNotRender;
    private _downPointerIds;
    protected _isEnabled: boolean;
    protected _disabledColor: string;
    /** @hidden */
    protected _rebuildLayout: boolean;
    /** @hidden */
    _isClipped: boolean;
    /** @hidden */
    _tag: any;
    /**
     * Gets or sets the unique id of the node. Please note that this number will be updated when the control is added to a container
     */
    uniqueId: number;
    /**
     * Gets or sets an object used to store user defined information for the node
     */
    metadata: any;
    /** Gets or sets a boolean indicating if the control can be hit with pointer events */
    isHitTestVisible: boolean;
    /** Gets or sets a boolean indicating if the control can block pointer events */
    isPointerBlocker: boolean;
    /** Gets or sets a boolean indicating if the control can be focusable */
    isFocusInvisible: boolean;
    /** Gets or sets a boolean indicating if the children are clipped to the current control bounds */
    clipChildren: boolean;
    /**
     * Gets or sets a boolean indicating that the current control should cache its rendering (useful when the control does not change often)
     */
    useBitmapCache: boolean;
    private _cacheData;
    private _shadowOffsetX;
    /** Gets or sets a value indicating the offset to apply on X axis to render the shadow */
    shadowOffsetX: number;
    private _shadowOffsetY;
    /** Gets or sets a value indicating the offset to apply on Y axis to render the shadow */
    shadowOffsetY: number;
    private _shadowBlur;
    /** Gets or sets a value indicating the amount of blur to use to render the shadow */
    shadowBlur: number;
    private _shadowColor;
    /** Gets or sets a value indicating the color of the shadow (black by default ie. "#000") */
    shadowColor: string;
    /** Gets or sets the cursor to use when the control is hovered */
    hoverCursor: string;
    /** @hidden */
    protected _linkOffsetX: ValueAndUnit;
    /** @hidden */
    protected _linkOffsetY: ValueAndUnit;
    /** Gets the control type name */
    readonly typeName: string;
    /**
     * Get the current class name of the control.
     * @returns current class name
     */
    getClassName(): string;
    /**
    * An event triggered when the pointer move over the control.
    */
    onPointerMoveObservable: Observable<Vector2>;
    /**
    * An event triggered when the pointer move out of the control.
    */
    onPointerOutObservable: Observable<Control>;
    /**
    * An event triggered when the pointer taps the control
    */
    onPointerDownObservable: Observable<Vector2WithInfo>;
    /**
    * An event triggered when pointer up
    */
    onPointerUpObservable: Observable<Vector2WithInfo>;
    /**
    * An event triggered when a control is clicked on
    */
    onPointerClickObservable: Observable<Vector2WithInfo>;
    /**
    * An event triggered when pointer enters the control
    */
    onPointerEnterObservable: Observable<Control>;
    /**
    * An event triggered when the control is marked as dirty
    */
    onDirtyObservable: Observable<Control>;
    /**
     * An event triggered before drawing the control
     */
    onBeforeDrawObservable: Observable<Control>;
    /**
     * An event triggered after the control was drawn
     */
    onAfterDrawObservable: Observable<Control>;
    /**
     * Get the hosting AdvancedDynamicTexture
     */
    readonly host: AdvancedDynamicTexture;
    /** Gets or set information about font offsets (used to render and align text) */
    fontOffset: {
        ascent: number;
        height: number;
        descent: number;
    };
    /** Gets or sets alpha value for the control (1 means opaque and 0 means entirely transparent) */
    alpha: number;
    /**
     * Gets or sets a boolean indicating that we want to highlight the control (mostly for debugging purpose)
     */
    isHighlighted: boolean;
    /** Gets or sets a value indicating the scale factor on X axis (1 by default)
     * @see http://doc.babylonjs.com/how_to/gui#rotation-and-scaling
    */
    scaleX: number;
    /** Gets or sets a value indicating the scale factor on Y axis (1 by default)
     * @see http://doc.babylonjs.com/how_to/gui#rotation-and-scaling
    */
    scaleY: number;
    /** Gets or sets the rotation angle (0 by default)
     * @see http://doc.babylonjs.com/how_to/gui#rotation-and-scaling
    */
    rotation: number;
    /** Gets or sets the transformation center on Y axis (0 by default)
     * @see http://doc.babylonjs.com/how_to/gui#rotation-and-scaling
    */
    transformCenterY: number;
    /** Gets or sets the transformation center on X axis (0 by default)
     * @see http://doc.babylonjs.com/how_to/gui#rotation-and-scaling
    */
    transformCenterX: number;
    /**
     * Gets or sets the horizontal alignment
     * @see http://doc.babylonjs.com/how_to/gui#alignments
     */
    horizontalAlignment: number;
    /**
     * Gets or sets the vertical alignment
     * @see http://doc.babylonjs.com/how_to/gui#alignments
     */
    verticalAlignment: number;
    /**
     * Gets or sets control width
     * @see http://doc.babylonjs.com/how_to/gui#position-and-size
     */
    width: string | number;
    /**
     * Gets control width in pixel
     * @see http://doc.babylonjs.com/how_to/gui#position-and-size
     */
    readonly widthInPixels: number;
    /**
     * Gets or sets control height
     * @see http://doc.babylonjs.com/how_to/gui#position-and-size
     */
    height: string | number;
    /**
     * Gets control height in pixel
     * @see http://doc.babylonjs.com/how_to/gui#position-and-size
     */
    readonly heightInPixels: number;
    /** Gets or set font family */
    fontFamily: string;
    /** Gets or sets font style */
    fontStyle: string;
    /** Gets or sets font weight */
    fontWeight: string;
    /**
     * Gets or sets style
     * @see http://doc.babylonjs.com/how_to/gui#styles
     */
    style: Nullable<Style>;
    /** @hidden */
    readonly _isFontSizeInPercentage: boolean;
    /** Gets font size in pixels */
    readonly fontSizeInPixels: number;
    /** Gets or sets font size */
    fontSize: string | number;
    /** Gets or sets foreground color */
    color: string;
    /** Gets or sets z index which is used to reorder controls on the z axis */
    zIndex: number;
    /** Gets or sets a boolean indicating if the control can be rendered */
    notRenderable: boolean;
    /** Gets or sets a boolean indicating if the control is visible */
    isVisible: boolean;
    /** Gets a boolean indicating that the control needs to update its rendering */
    readonly isDirty: boolean;
    /**
     * Gets the current linked mesh (or null if none)
     */
    readonly linkedMesh: Nullable<AbstractMesh>;
    /**
     * Gets or sets a value indicating the padding to use on the left of the control
     * @see http://doc.babylonjs.com/how_to/gui#position-and-size
     */
    paddingLeft: string | number;
    /**
     * Gets a value indicating the padding in pixels to use on the left of the control
     * @see http://doc.babylonjs.com/how_to/gui#position-and-size
     */
    readonly paddingLeftInPixels: number;
    /**
     * Gets or sets a value indicating the padding to use on the right of the control
     * @see http://doc.babylonjs.com/how_to/gui#position-and-size
     */
    paddingRight: string | number;
    /**
     * Gets a value indicating the padding in pixels to use on the right of the control
     * @see http://doc.babylonjs.com/how_to/gui#position-and-size
     */
    readonly paddingRightInPixels: number;
    /**
     * Gets or sets a value indicating the padding to use on the top of the control
     * @see http://doc.babylonjs.com/how_to/gui#position-and-size
     */
    paddingTop: string | number;
    /**
     * Gets a value indicating the padding in pixels to use on the top of the control
     * @see http://doc.babylonjs.com/how_to/gui#position-and-size
     */
    readonly paddingTopInPixels: number;
    /**
     * Gets or sets a value indicating the padding to use on the bottom of the control
     * @see http://doc.babylonjs.com/how_to/gui#position-and-size
     */
    paddingBottom: string | number;
    /**
     * Gets a value indicating the padding in pixels to use on the bottom of the control
     * @see http://doc.babylonjs.com/how_to/gui#position-and-size
     */
    readonly paddingBottomInPixels: number;
    /**
     * Gets or sets a value indicating the left coordinate of the control
     * @see http://doc.babylonjs.com/how_to/gui#position-and-size
     */
    left: string | number;
    /**
     * Gets a value indicating the left coordinate in pixels of the control
     * @see http://doc.babylonjs.com/how_to/gui#position-and-size
     */
    readonly leftInPixels: number;
    /**
     * Gets or sets a value indicating the top coordinate of the control
     * @see http://doc.babylonjs.com/how_to/gui#position-and-size
     */
    top: string | number;
    /**
     * Gets a value indicating the top coordinate in pixels of the control
     * @see http://doc.babylonjs.com/how_to/gui#position-and-size
     */
    readonly topInPixels: number;
    /**
     * Gets or sets a value indicating the offset on X axis to the linked mesh
     * @see http://doc.babylonjs.com/how_to/gui#tracking-positions
     */
    linkOffsetX: string | number;
    /**
     * Gets a value indicating the offset in pixels on X axis to the linked mesh
     * @see http://doc.babylonjs.com/how_to/gui#tracking-positions
     */
    readonly linkOffsetXInPixels: number;
    /**
     * Gets or sets a value indicating the offset on Y axis to the linked mesh
     * @see http://doc.babylonjs.com/how_to/gui#tracking-positions
     */
    linkOffsetY: string | number;
    /**
     * Gets a value indicating the offset in pixels on Y axis to the linked mesh
     * @see http://doc.babylonjs.com/how_to/gui#tracking-positions
     */
    readonly linkOffsetYInPixels: number;
    /** Gets the center coordinate on X axis */
    readonly centerX: number;
    /** Gets the center coordinate on Y axis */
    readonly centerY: number;
    /** Gets or sets if control is Enabled*/
    isEnabled: boolean;
    /** Gets or sets background color of control if it's disabled*/
    disabledColor: string;
    /**
     * Creates a new control
     * @param name defines the name of the control
     */
    constructor(
    /** defines the name of the control */
    name?: string | undefined);
    /** @hidden */
    protected _getTypeName(): string;
    /**
     * Gets the first ascendant in the hierarchy of the given type
     * @param className defines the required type
     * @returns the ascendant or null if not found
     */
    getAscendantOfClass(className: string): Nullable<Control>;
    /** @hidden */
    _resetFontCache(): void;
    /**
     * Determines if a container is an ascendant of the current control
     * @param container defines the container to look for
     * @returns true if the container is one of the ascendant of the control
     */
    isAscendant(container: Control): boolean;
    /**
     * Gets coordinates in local control space
     * @param globalCoordinates defines the coordinates to transform
     * @returns the new coordinates in local space
     */
    getLocalCoordinates(globalCoordinates: Vector2): Vector2;
    /**
     * Gets coordinates in local control space
     * @param globalCoordinates defines the coordinates to transform
     * @param result defines the target vector2 where to store the result
     * @returns the current control
     */
    getLocalCoordinatesToRef(globalCoordinates: Vector2, result: Vector2): Control;
    /**
     * Gets coordinates in parent local control space
     * @param globalCoordinates defines the coordinates to transform
     * @returns the new coordinates in parent local space
     */
    getParentLocalCoordinates(globalCoordinates: Vector2): Vector2;
    /**
     * Move the current control to a vector3 position projected onto the screen.
     * @param position defines the target position
     * @param scene defines the hosting scene
     */
    moveToVector3(position: Vector3, scene: Scene): void;
    /** @hidden */
    _getDescendants(results: Control[], directDescendantsOnly?: boolean, predicate?: (control: Control) => boolean): void;
    /**
     * Will return all controls that have this control as ascendant
     * @param directDescendantsOnly defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered
     * @param predicate defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored
     * @return all child controls
     */
    getDescendants(directDescendantsOnly?: boolean, predicate?: (control: Control) => boolean): Control[];
    /**
     * Link current control with a target mesh
     * @param mesh defines the mesh to link with
     * @see http://doc.babylonjs.com/how_to/gui#tracking-positions
     */
    linkWithMesh(mesh: Nullable<AbstractMesh>): void;
    /** @hidden */
    _moveToProjectedPosition(projectedPosition: Vector3): void;
    /** @hidden */
    _offsetLeft(offset: number): void;
    /** @hidden */
    _offsetTop(offset: number): void;
    /** @hidden */
    _markMatrixAsDirty(): void;
    /** @hidden */
    _flagDescendantsAsMatrixDirty(): void;
    /** @hidden */
    _intersectsRect(rect: Measure): boolean;
    /** @hidden */
    protected invalidateRect(left: number, top: number, right: number, bottom: number): void;
    /** @hidden */
    _markAsDirty(force?: boolean): void;
    /** @hidden */
    _markAllAsDirty(): void;
    /** @hidden */
    _link(host: AdvancedDynamicTexture): void;
    /** @hidden */
    protected _transform(context?: CanvasRenderingContext2D): void;
    /** @hidden */
    _renderHighlight(context: CanvasRenderingContext2D): void;
    /** @hidden */
    _renderHighlightSpecific(context: CanvasRenderingContext2D): void;
    /** @hidden */
    protected _applyStates(context: CanvasRenderingContext2D): void;
    /** @hidden */
    _layout(parentMeasure: Measure, context: CanvasRenderingContext2D): boolean;
    /** @hidden */
    protected _processMeasures(parentMeasure: Measure, context: CanvasRenderingContext2D): void;
    protected _evaluateClippingState(parentMeasure: Measure): void;
    /** @hidden */
    _measure(): void;
    /** @hidden */
    protected _computeAlignment(parentMeasure: Measure, context: CanvasRenderingContext2D): void;
    /** @hidden */
    protected _preMeasure(parentMeasure: Measure, context: CanvasRenderingContext2D): void;
    /** @hidden */
    protected _additionalProcessing(parentMeasure: Measure, context: CanvasRenderingContext2D): void;
    /** @hidden */
    protected _clipForChildren(context: CanvasRenderingContext2D): void;
    private static _ClipMeasure;
    private _clip;
    /** @hidden */
    _render(context: CanvasRenderingContext2D, invalidatedRectangle?: Nullable<Measure>): boolean;
    /** @hidden */
    _draw(context: CanvasRenderingContext2D, invalidatedRectangle?: Nullable<Measure>): void;
    /**
     * Tests if a given coordinates belong to the current control
     * @param x defines x coordinate to test
     * @param y defines y coordinate to test
     * @returns true if the coordinates are inside the control
     */
    contains(x: number, y: number): boolean;
    /** @hidden */
    _processPicking(x: number, y: number, type: number, pointerId: number, buttonIndex: number): boolean;
    /** @hidden */
    _onPointerMove(target: Control, coordinates: Vector2): void;
    /** @hidden */
    _onPointerEnter(target: Control): boolean;
    /** @hidden */
    _onPointerOut(target: Control): void;
    /** @hidden */
    _onPointerDown(target: Control, coordinates: Vector2, pointerId: number, buttonIndex: number): boolean;
    /** @hidden */
    _onPointerUp(target: Control, coordinates: Vector2, pointerId: number, buttonIndex: number, notifyClick: boolean): void;
    /** @hidden */
    _forcePointerUp(pointerId?: Nullable<number>): void;
    /** @hidden */
    _processObservables(type: number, x: number, y: number, pointerId: number, buttonIndex: number): boolean;
    private _prepareFont;
    /** Releases associated resources */
    dispose(): void;
    private static _HORIZONTAL_ALIGNMENT_LEFT;
    private static _HORIZONTAL_ALIGNMENT_RIGHT;
    private static _HORIZONTAL_ALIGNMENT_CENTER;
    private static _VERTICAL_ALIGNMENT_TOP;
    private static _VERTICAL_ALIGNMENT_BOTTOM;
    private static _VERTICAL_ALIGNMENT_CENTER;
    /** HORIZONTAL_ALIGNMENT_LEFT */
    static readonly HORIZONTAL_ALIGNMENT_LEFT: number;
    /** HORIZONTAL_ALIGNMENT_RIGHT */
    static readonly HORIZONTAL_ALIGNMENT_RIGHT: number;
    /** HORIZONTAL_ALIGNMENT_CENTER */
    static readonly HORIZONTAL_ALIGNMENT_CENTER: number;
    /** VERTICAL_ALIGNMENT_TOP */
    static readonly VERTICAL_ALIGNMENT_TOP: number;
    /** VERTICAL_ALIGNMENT_BOTTOM */
    static readonly VERTICAL_ALIGNMENT_BOTTOM: number;
    /** VERTICAL_ALIGNMENT_CENTER */
    static readonly VERTICAL_ALIGNMENT_CENTER: number;
    private static _FontHeightSizes;
    /** @hidden */
    static _GetFontOffset(font: string): {
        ascent: number;
        height: number;
        descent: number;
    };
    /**
     * Creates a stack panel that can be used to render headers
     * @param control defines the control to associate with the header
     * @param text defines the text of the header
     * @param size defines the size of the header
     * @param options defines options used to configure the header
     * @returns a new StackPanel
     * @ignore
     * @hidden
     */
    static AddHeader: (control: Control, text: string, size: string | number, options: {
        isHorizontal: boolean;
        controlFirst: boolean;
    }) => any;
    /** @hidden */
    protected static drawEllipse(x: number, y: number, width: number, height: number, context: CanvasRenderingContext2D): void;
}
