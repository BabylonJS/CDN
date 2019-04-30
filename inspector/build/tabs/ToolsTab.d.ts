import { Inspector } from "../Inspector";
import { Tab } from "./Tab";
import { TabBar } from "./TabBar";
export declare class ToolsTab extends Tab {
    private _inspector;
    private _scene;
    private _videoRecorder;
    constructor(tabbar: TabBar, insp: Inspector);
    dispose(): void;
}
