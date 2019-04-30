import { Texture } from "babylonjs";
import { CubeTextureElement } from "./CubeTextureElement";
/**
* Display a very small div. A new canvas is created, with a new js scene, containing only the
* cube texture in a cube
*/
export declare class HDRCubeTextureElement extends CubeTextureElement {
    /** The texture given as a parameter should be cube. */
    constructor(tex: Texture);
    /** Creates the box  */
    protected _populateScene(): void;
}
