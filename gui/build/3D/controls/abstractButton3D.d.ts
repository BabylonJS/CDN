import { Control3D } from "./control3D";
import { TransformNode, Scene } from "babylonjs";
/**
 * Class used as a root to all buttons
 */
export declare class AbstractButton3D extends Control3D {
    /**
     * Creates a new button
     * @param name defines the control name
     */
    constructor(name?: string);
    protected _getTypeName(): string;
    protected _createNode(scene: Scene): TransformNode;
}
