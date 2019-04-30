import { Texture } from "babylonjs";
import { BasicElement } from "./BasicElement";
/**
* Display a very small div corresponding to the given texture. On mouse over, display the full image
*/
export declare class TextureElement extends BasicElement {
    /** The big div displaying the full image */
    private _textureDiv;
    constructor(tex: Texture);
    update(tex?: Texture): void;
    private _showViewer;
}
