import { Sound } from "babylonjs";
import { PropertyLine } from "../details/PropertyLine";
import { AbstractTreeTool } from "../treetools/AbstractTreeTool";
import { ISoundInteractions } from "../treetools/SoundInteractions";
import { Adapter } from "./Adapter";
export declare class SoundAdapter extends Adapter implements ISoundInteractions {
    constructor(obj: Sound);
    /** Returns the name displayed in the tree */
    id(): string;
    /** Returns the type of this object - displayed in the tree */
    type(): string;
    /** Returns the list of properties to be displayed for this adapter */
    getProperties(): Array<PropertyLine>;
    getTools(): Array<AbstractTreeTool>;
    setPlaying(callback: Function): void;
}
