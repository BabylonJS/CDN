import { DynamicTexture, Nullable, Layer, Viewport, Scene, Vector3, Matrix, Vector2, AbstractMesh, Observable, ClipboardInfo } from 'babylonjs';
import { Container } from "./controls/container";
import { Control } from "./controls/control";
import { Style } from "./style";
/**
* Interface used to define a control that can receive focus
*/
export interface IFocusableControl {
    /**
     * Function called when the control receives the focus
     */
    onFocus(): void;
    /**
     * Function called when the control loses the focus
     */
    onBlur(): void;
    /**
     * Function called to let the control handle keyboard events
     * @param evt defines the current keyboard event
     */
    processKeyboard(evt: KeyboardEvent): void;
    /**
    * Function called to get the list of controls that should not steal the focus from this control
    * @returns an array of controls
    */
    keepsFocusWith(): Nullable<Control[]>;
}
/**
* Class used to create texture to support 2D GUI elements
* @see http://doc.babylonjs.com/how_to/gui
*/
export declare class AdvancedDynamicTexture extends DynamicTexture {
    private _isDirty;
    private _renderObserver;
    private _resizeObserver;
    private _preKeyboardObserver;
    private _pointerMoveObserver;
    private _pointerObserver;
    private _canvasPointerOutObserver;
    private _background;
    /** @hidden */
    _rootContainer: Container;
    /** @hidden */
    _lastPickedControl: Control;
    /** @hidden */
    _lastControlOver: {
        [pointerId: number]: Control;
    };
    /** @hidden */
    _lastControlDown: {
        [pointerId: number]: Control;
    };
    /** @hidden */
    _capturingControl: {
        [pointerId: number]: Control;
    };
    /** @hidden */
    _shouldBlockPointer: boolean;
    /** @hidden */
    _layerToDispose: Nullable<Layer>;
    /** @hidden */
    _linkedControls: Control[];
    private _isFullscreen;
    private _fullscreenViewport;
    private _idealWidth;
    private _idealHeight;
    private _useSmallestIdeal;
    private _renderAtIdealSize;
    private _focusedControl;
    private _blockNextFocusCheck;
    private _renderScale;
    private _rootCanvas;
    /**
    * Define type to string to ensure compatibility across browsers
    * Safari doesn't support DataTransfer constructor
    */
    private _clipboardData;
    /**
    * Observable event triggered each time an clipboard event is received from the rendering canvas
    */
    onClipboardObservable: Observable<ClipboardInfo>;
    /**
    * Observable event triggered each time a pointer down is intercepted by a control
    */
    onControlPickedObservable: Observable<Control>;
    /**
    * Observable event triggered before layout is evaluated
    */
    onBeginLayoutObservable: Observable<AdvancedDynamicTexture>;
    /**
    * Observable event triggered after the layout was evaluated
    */
    onEndLayoutObservable: Observable<AdvancedDynamicTexture>;
    /**
    * Observable event triggered before the texture is rendered
    */
    onBeginRenderObservable: Observable<AdvancedDynamicTexture>;
    /**
    * Observable event triggered after the texture was rendered
    */
    onEndRenderObservable: Observable<AdvancedDynamicTexture>;
    /**
    * Gets or sets a boolean defining if alpha is stored as premultiplied
    */
    premulAlpha: boolean;
    /**
    * Gets or sets a number used to scale rendering size (2 means that the texture will be twice bigger).
    * Useful when you want more antialiasing
    */
    renderScale: number;
    /** Gets or sets the background color */
    background: string;
    /**
    * Gets or sets the ideal width used to design controls.
    * The GUI will then rescale everything accordingly
    * @see http://doc.babylonjs.com/how_to/gui#adaptive-scaling
    */
    idealWidth: number;
    /**
    * Gets or sets the ideal height used to design controls.
    * The GUI will then rescale everything accordingly
    * @see http://doc.babylonjs.com/how_to/gui#adaptive-scaling
    */
    idealHeight: number;
    /**
    * Gets or sets a boolean indicating if the smallest ideal value must be used if idealWidth and idealHeight are both set
    * @see http://doc.babylonjs.com/how_to/gui#adaptive-scaling
    */
    useSmallestIdeal: boolean;
    /**
    * Gets or sets a boolean indicating if adaptive scaling must be used
    * @see http://doc.babylonjs.com/how_to/gui#adaptive-scaling
    */
    renderAtIdealSize: boolean;
    /**
    * Gets the underlying layer used to render the texture when in fullscreen mode
    */
    readonly layer: Nullable<Layer>;
    /**
    * Gets the root container control
    */
    readonly rootContainer: Container;
    /**
    * Returns an array containing the root container.
    * This is mostly used to let the Inspector introspects the ADT
    * @returns an array containing the rootContainer
    */
    getChildren(): Array<Container>;
    /**
    * Will return all controls that are inside this texture
    * @param directDescendantsOnly defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered
    * @param predicate defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored
    * @return all child controls
    */
    getDescendants(directDescendantsOnly?: boolean, predicate?: (control: Control) => boolean): Control[];
    /**
    * Gets or sets the current focused control
    */
    focusedControl: Nullable<IFocusableControl>;
    /**
    * Gets or sets a boolean indicating if the texture must be rendered in background or foreground when in fullscreen mode
    */
    isForeground: boolean;
    /**
    * Gets or set information about clipboardData
    */
    clipboardData: string;
    /**
   * Creates a new AdvancedDynamicTexture
   * @param name defines the name of the texture
   * @param width defines the width of the texture
   * @param height defines the height of the texture
   * @param scene defines the hosting scene
   * @param generateMipMaps defines a boolean indicating if mipmaps must be generated (false by default)
   * @param samplingMode defines the texture sampling mode (Texture.NEAREST_SAMPLINGMODE by default)
   */
    constructor(name: string, width: number | undefined, height: number | undefined, scene: Nullable<Scene>, generateMipMaps?: boolean, samplingMode?: number);
    /**
    * Get the current class name of the texture useful for serialization or dynamic coding.
    * @returns "AdvancedDynamicTexture"
    */
    getClassName(): string;
    /**
    * Function used to execute a function on all controls
    * @param func defines the function to execute
    * @param container defines the container where controls belong. If null the root container will be used
    */
    executeOnAllControls(func: (control: Control) => void, container?: Container): void;
    private _useInvalidateRectOptimization;
    /**
     * Gets or sets a boolean indicating if the InvalidateRect optimization should be turned on
     */
    useInvalidateRectOptimization: boolean;
    private _clearRectangle;
    private _invalidatedRectangle;
    /**
     * Invalidates a rectangle area on the gui texture
     * @param clearMinX left most position of the rectangle to clear in the texture
     * @param clearMinY top most position of the rectangle to clear in the texture
     * @param clearMaxX right most position of the rectangle to clear in the texture
     * @param clearMaxY bottom most position of the rectangle to clear in the texture
     * @param minX left most position of the rectangle to invalidate in absolute coordinates (not taking in account local transformation)
     * @param minY top most position of the rectangle to invalidate in absolute coordinates (not taking in account local transformation)
     * @param maxX right most position of the rectangle to invalidate in absolute coordinates (not taking in account local transformation)
     * @param maxY bottom most position of the rectangle to invalidate in absolute coordinates (not taking in account local transformation)
     */
    invalidateRect(clearMinX: number, clearMinY: number, clearMaxX: number, clearMaxY: number, minX: number, minY: number, maxX: number, maxY: number): void;
    /**
    * Marks the texture as dirty forcing a complete update
    */
    markAsDirty(): void;
    /**
    * Helper function used to create a new style
    * @returns a new style
    * @see http://doc.babylonjs.com/how_to/gui#styles
    */
    createStyle(): Style;
    /**
    * Adds a new control to the root container
    * @param control defines the control to add
    * @returns the current texture
    */
    addControl(control: Control): AdvancedDynamicTexture;
    /**
    * Removes a control from the root container
    * @param control defines the control to remove
    * @returns the current texture
    */
    removeControl(control: Control): AdvancedDynamicTexture;
    /**
    * Release all resources
    */
    dispose(): void;
    private _onResize;
    /** @hidden */
    _getGlobalViewport(scene: Scene): Viewport;
    /**
    * Get screen coordinates for a vector3
    * @param position defines the position to project
    * @param worldMatrix defines the world matrix to use
    * @returns the projected position
    */
    getProjectedPosition(position: Vector3, worldMatrix: Matrix): Vector2;
    private _checkUpdate;
    private _clearMeasure;
    private _render;
    /** @hidden */
    _changeCursor(cursor: string): void;
    /** @hidden */
    _registerLastControlDown(control: Control, pointerId: number): void;
    private _doPicking;
    /** @hidden */
    _cleanControlAfterRemovalFromList(list: {
        [pointerId: number]: Control;
    }, control: Control): void;
    /** @hidden */
    _cleanControlAfterRemoval(control: Control): void;
    /** Attach to all scene events required to support pointer events */
    attach(): void;
    /** @hidden */
    private onClipboardCopy;
    /** @hidden */
    private onClipboardCut;
    /** @hidden */
    private onClipboardPaste;
    /**
    * Register the clipboard Events onto the canvas
    */
    registerClipboardEvents(): void;
    /**
     * Unregister the clipboard Events from the canvas
     */
    unRegisterClipboardEvents(): void;
    /**
    * Connect the texture to a hosting mesh to enable interactions
    * @param mesh defines the mesh to attach to
    * @param supportPointerMove defines a boolean indicating if pointer move events must be catched as well
    */
    attachToMesh(mesh: AbstractMesh, supportPointerMove?: boolean): void;
    /**
    * Move the focus to a specific control
    * @param control defines the control which will receive the focus
    */
    moveFocusToControl(control: IFocusableControl): void;
    private _manageFocus;
    private _attachToOnPointerOut;
    /**
     * Creates a new AdvancedDynamicTexture in projected mode (ie. attached to a mesh)
     * @param mesh defines the mesh which will receive the texture
     * @param width defines the texture width (1024 by default)
     * @param height defines the texture height (1024 by default)
     * @param supportPointerMove defines a boolean indicating if the texture must capture move events (true by default)
     * @param onlyAlphaTesting defines a boolean indicating that alpha blending will not be used (only alpha testing) (false by default)
     * @returns a new AdvancedDynamicTexture
     */
    static CreateForMesh(mesh: AbstractMesh, width?: number, height?: number, supportPointerMove?: boolean, onlyAlphaTesting?: boolean): AdvancedDynamicTexture;
    /**
    * Creates a new AdvancedDynamicTexture in fullscreen mode.
    * In this mode the texture will rely on a layer for its rendering.
    * This allows it to be treated like any other layer.
    * As such, if you have a multi camera setup, you can set the layerMask on the GUI as well.
    * LayerMask is set through advancedTexture.layer.layerMask
    * @param name defines name for the texture
    * @param foreground defines a boolean indicating if the texture must be rendered in foreground (default is true)
    * @param scene defines the hsoting scene
    * @param sampling defines the texture sampling mode (Texture.BILINEAR_SAMPLINGMODE by default)
    * @returns a new AdvancedDynamicTexture
    */
    static CreateFullscreenUI(name: string, foreground?: boolean, scene?: Nullable<Scene>, sampling?: number): AdvancedDynamicTexture;
}
