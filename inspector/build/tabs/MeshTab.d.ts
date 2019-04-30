import { Inspector } from "../Inspector";
import { TreeItem } from "../tree/TreeItem";
import { PropertyTab } from "./PropertyTab";
import { TabBar } from "./TabBar";
export declare class MeshTab extends PropertyTab {
    constructor(tabbar: TabBar, inspector: Inspector);
    protected _getTree(): Array<TreeItem>;
}
