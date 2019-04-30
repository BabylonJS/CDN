import { TextureAdapter } from "../adapters/TextureAdapter";
import { Inspector } from "../Inspector";
import { TreeItem } from "../tree/TreeItem";
import { Tab } from "./Tab";
import { TabBar } from "./TabBar";
export declare class TextureTab extends Tab {
    static DDSPreview: DDSPreview;
    private _inspector;
    /** The panel containing a list of items */
    protected _treePanel: HTMLElement;
    protected _treeItems: Array<TreeItem>;
    private _imagePanel;
    constructor(tabbar: TabBar, inspector: Inspector);
    dispose(): void;
    update(_items?: Array<TreeItem>): void;
    private _getTree;
    /** Display the details of the given item */
    displayDetails(item: TreeItem): void;
    /** Select an item in the tree */
    select(item: TreeItem): void;
    /** Set the given item as active in the tree */
    activateNode(item: TreeItem): void;
}
declare class DDSPreview {
    canvas: HTMLCanvasElement | null;
    private _engine;
    private _scene;
    private _camera;
    private _mat;
    private _tex;
    private _cubeTex;
    private _mesh;
    constructor(AdapterItem: TextureAdapter);
    private _run;
    insertPreview(AdapterItem: TextureAdapter): void;
    dispose(): void;
}
export {};
