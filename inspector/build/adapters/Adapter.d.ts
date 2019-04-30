import { PropertyLine } from "../details/PropertyLine";
import { AbstractTreeTool } from "../treetools/AbstractTreeTool";
export declare abstract class Adapter {
    protected _obj: any;
    private static _name;
    constructor(obj: any);
    /** Returns the name displayed in the tree */
    abstract id(): string;
    /** Returns the type of this object - displayed in the tree */
    abstract type(): string;
    /** Returns the list of properties to be displayed for this adapter */
    abstract getProperties(): Array<PropertyLine>;
    /** Returns true if the given object correspond to this  */
    correspondsTo(obj: any): boolean;
    /** Returns the adapter unique name */
    readonly name: string;
    /**
     * Returns the actual object used for this adapter
     */
    readonly object: any;
    /** Returns the list of tools available for this adapter */
    abstract getTools(): Array<AbstractTreeTool>;
}
