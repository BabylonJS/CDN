import { BasicElement } from "../gui/BasicElement";
import { TreeItem } from "../tree/TreeItem";
import { TabBar } from "./TabBar";
export declare abstract class Tab extends BasicElement {
    protected _tabbar: TabBar;
    name: string;
    protected _isActive: boolean;
    protected _panel: HTMLDivElement;
    constructor(tabbar: TabBar, name: string);
    /** True if the tab is active, false otherwise */
    isActive(): boolean;
    protected _build(): void;
    /** Set this tab as active or not, depending on the current state */
    active(b: boolean): void;
    update(): void;
    /** Creates the tab panel for this tab. */
    getPanel(): HTMLElement;
    /** Add this in the propertytab with the searchbar */
    filter(str: string): void;
    /** Dispose properly this tab */
    abstract dispose(): void;
    /** Select an item in the tree */
    select(item: TreeItem): void;
    /**
     * Returns the total width in pixel of this tab, 0 by default
    */
    getPixelWidth(): number;
}
