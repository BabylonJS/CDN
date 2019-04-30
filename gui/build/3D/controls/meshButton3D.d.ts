import { Scene, TransformNode, AbstractMesh, Mesh } from "babylonjs";
import { Button3D } from "./button3D";
/**
 * Class used to create an interactable object. It's a 3D button using a mesh coming from the current scene
 */
export declare class MeshButton3D extends Button3D {
    /** @hidden */
    protected _currentMesh: Mesh;
    /**
     * Creates a new 3D button based on a mesh
     * @param mesh mesh to become a 3D button
     * @param name defines the control name
     */
    constructor(mesh: Mesh, name?: string);
    protected _getTypeName(): string;
    protected _createNode(scene: Scene): TransformNode;
    protected _affectMaterial(mesh: AbstractMesh): void;
}
