import { Camera } from "babylonjs";
import { AbstractTreeTool } from "../treetools/AbstractTreeTool";
import { PropertyLine } from "../details/PropertyLine";
import { ICameraPOV } from "../treetools/CameraPOV";
import { Adapter } from "./Adapter";
export declare class CameraAdapter extends Adapter implements ICameraPOV {
    constructor(obj: Camera);
    /** Returns the name displayed in the tree */
    id(): string;
    /** Returns the type of this object - displayed in the tree */
    type(): string;
    /** Returns the list of properties to be displayed for this adapter */
    getProperties(): Array<PropertyLine>;
    getTools(): Array<AbstractTreeTool>;
    setPOV(): void;
    getCurrentActiveCamera(): string;
}
