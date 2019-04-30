import { Button3D } from "./button3D";
import { Mesh, StandardMaterial, Nullable, Scene, TransformNode } from "babylonjs";
import { FluentMaterial } from "../materials/fluentMaterial";
import { AdvancedDynamicTexture } from "../../2D/advancedDynamicTexture";
/**
 * Class used to create a holographic button in 3D
 */
export declare class HolographicButton extends Button3D {
    private _backPlate;
    private _textPlate;
    private _frontPlate;
    private _text;
    private _imageUrl;
    private _shareMaterials;
    private _frontMaterial;
    private _backMaterial;
    private _plateMaterial;
    private _pickedPointObserver;
    private _tooltipFade;
    private _tooltipTextBlock;
    private _tooltipTexture;
    private _tooltipMesh;
    private _tooltipHoverObserver;
    private _tooltipOutObserver;
    private _disposeTooltip;
    /**
     * Text to be displayed on the tooltip shown when hovering on the button. When set to null tooltip is disabled. (Default: null)
     */
    tooltipText: Nullable<string>;
    /**
     * Gets or sets text for the button
     */
    text: string;
    /**
     * Gets or sets the image url for the button
     */
    imageUrl: string;
    /**
     * Gets the back material used by this button
     */
    readonly backMaterial: FluentMaterial;
    /**
     * Gets the front material used by this button
     */
    readonly frontMaterial: FluentMaterial;
    /**
     * Gets the plate material used by this button
     */
    readonly plateMaterial: StandardMaterial;
    /**
     * Gets a boolean indicating if this button shares its material with other HolographicButtons
     */
    readonly shareMaterials: boolean;
    /**
     * Creates a new button
     * @param name defines the control name
     */
    constructor(name?: string, shareMaterials?: boolean);
    protected _getTypeName(): string;
    private _rebuildContent;
    protected _createNode(scene: Scene): TransformNode;
    protected _applyFacade(facadeTexture: AdvancedDynamicTexture): void;
    private _createBackMaterial;
    private _createFrontMaterial;
    private _createPlateMaterial;
    protected _affectMaterial(mesh: Mesh): void;
    /**
     * Releases all associated resources
     */
    dispose(): void;
}
