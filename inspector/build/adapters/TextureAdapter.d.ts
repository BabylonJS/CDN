import { Adapter } from "./Adapter";
import { BaseTexture } from "babylonjs";
import { PropertyLine } from "../details/PropertyLine";
import { AbstractTreeTool } from "../treetools/AbstractTreeTool";
export declare class TextureAdapter extends Adapter {
    constructor(obj: BaseTexture);
    /** Returns the name displayed in the tree */
    id(): string;
    /** Returns the type of this object - displayed in the tree */
    type(): string;
    /** Returns the list of properties to be displayed for this adapter */
    getProperties(): Array<PropertyLine>;
    getTools(): Array<AbstractTreeTool>;
}
