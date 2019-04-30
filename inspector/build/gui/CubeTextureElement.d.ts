import { Mesh, Scene, Texture } from "babylonjs";
import { BasicElement } from "./BasicElement";
/**
* Display a very small div. A new canvas is created, with a new js scene, containing only the
* cube texture in a cube
*/
export declare class CubeTextureElement extends BasicElement {
    /** The big div displaying the full image */
    private _textureDiv;
    private _engine;
    protected _scene: Scene;
    protected _cube: Mesh;
    private _canvas;
    protected _textureUrl: string;
    private _pause;
    /** The texture given as a parameter should be cube. */
    constructor(tex: Texture);
    update(tex?: Texture): void;
    /** Creates the box  */
    protected _populateScene(): void;
    /** Init the babylon engine */
    private _initEngine;
    private _showViewer;
    /** Removes properly the babylon engine */
    dispose(): void;
}
