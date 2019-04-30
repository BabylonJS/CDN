import { IDisposable, Scene, Nullable, UtilityLayerRenderer, Observable, Vector3, Material } from "babylonjs";
import { Container3D } from "./controls/container3D";
import { Control3D } from "./controls/control3D";
/**
 * Class used to manage 3D user interface
 * @see http://doc.babylonjs.com/how_to/gui3d
 */
export declare class GUI3DManager implements IDisposable {
    private _scene;
    private _sceneDisposeObserver;
    private _utilityLayer;
    private _rootContainer;
    private _pointerObserver;
    private _pointerOutObserver;
    /** @hidden */
    _lastPickedControl: Control3D;
    /** @hidden */
    _lastControlOver: {
        [pointerId: number]: Control3D;
    };
    /** @hidden */
    _lastControlDown: {
        [pointerId: number]: Control3D;
    };
    /**
     * Observable raised when the point picked by the pointer events changed
     */
    onPickedPointChangedObservable: Observable<Nullable<Vector3>>;
    /** @hidden */
    _sharedMaterials: {
        [key: string]: Material;
    };
    /** Gets the hosting scene */
    readonly scene: Scene;
    /** Gets associated utility layer */
    readonly utilityLayer: Nullable<UtilityLayerRenderer>;
    /**
     * Creates a new GUI3DManager
     * @param scene
     */
    constructor(scene?: Scene);
    private _handlePointerOut;
    private _doPicking;
    /**
     * Gets the root container
     */
    readonly rootContainer: Container3D;
    /**
     * Gets a boolean indicating if the given control is in the root child list
     * @param control defines the control to check
     * @returns true if the control is in the root child list
     */
    containsControl(control: Control3D): boolean;
    /**
     * Adds a control to the root child list
     * @param control defines the control to add
     * @returns the current manager
     */
    addControl(control: Control3D): GUI3DManager;
    /**
     * Removes a control from the root child list
     * @param control defines the control to remove
     * @returns the current container
     */
    removeControl(control: Control3D): GUI3DManager;
    /**
     * Releases all associated resources
     */
    dispose(): void;
}
