import { PropertyLine } from "../details/PropertyLine";
import { AbstractTreeTool } from "../treetools/AbstractTreeTool";
import { IToolVisible } from "../treetools/Checkbox";
import { Adapter } from "./Adapter";
export declare class LightAdapter extends Adapter implements IToolVisible {
    constructor(obj: BABYLON.Light);
    /** Returns the name displayed in the tree */
    id(): string;
    /** Returns the type of this object - displayed in the tree */
    type(): string;
    /** Returns the list of properties to be displayed for this adapter */
    getProperties(): Array<PropertyLine>;
    getTools(): Array<AbstractTreeTool>;
    setVisible(b: boolean): void;
    isVisible(): boolean;
}
