import { VolumeBasedPanel } from "./volumeBasedPanel";
import { float, Vector3 } from "babylonjs";
import { Control3D } from "./control3D";
/**
 * Class used to create a container panel where items get randomized planar mapping
 */
export declare class ScatterPanel extends VolumeBasedPanel {
    private _iteration;
    /**
     * Gets or sets the number of iteration to use to scatter the controls (100 by default)
     */
    iteration: float;
    protected _mapGridNode(control: Control3D, nodePosition: Vector3): void;
    private _scatterMapping;
    protected _finalProcessing(): void;
}
