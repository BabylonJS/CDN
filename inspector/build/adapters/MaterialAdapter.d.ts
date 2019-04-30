import { Material } from "babylonjs";
import { PropertyLine } from "../details/PropertyLine";
import { AbstractTreeTool } from "../treetools/AbstractTreeTool";
import { Adapter } from "./Adapter";
export declare class MaterialAdapter extends Adapter {
    constructor(obj: Material);
    /** Returns the name displayed in the tree */
    id(): string;
    /** Returns the type of this object - displayed in the tree */
    type(): string;
    /** Returns the list of properties to be displayed for this adapter */
    getProperties(): Array<PropertyLine>;
    /** No tools for a material adapter */
    getTools(): Array<AbstractTreeTool>;
}
