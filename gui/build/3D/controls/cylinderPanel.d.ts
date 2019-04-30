import { VolumeBasedPanel } from "./volumeBasedPanel";
import { float, Vector3 } from "babylonjs";
import { Control3D } from "./control3D";
/**
 * Class used to create a container panel deployed on the surface of a cylinder
 */
export declare class CylinderPanel extends VolumeBasedPanel {
    private _radius;
    /**
     * Gets or sets the radius of the cylinder where to project controls (5 by default)
     */
    radius: float;
    protected _mapGridNode(control: Control3D, nodePosition: Vector3): void;
    private _cylindricalMapping;
}
