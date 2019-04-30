import { Inspector } from "../Inspector";
import { Tab } from "./Tab";
import { TabBar } from "./TabBar";
export declare class StatsTab extends Tab {
    private _inspector;
    /**
     * Properties in this array will be updated
     * in a render loop - Mostly stats properties
     */
    private _updatableProperties;
    private _scene;
    private _engine;
    private _glInfo;
    private _updateLoopHandler;
    private _refreshRateCounter;
    private refreshRate;
    private _sceneInstrumentation;
    private _engineInstrumentation;
    private _inputElement;
    private _connectToInstrumentation;
    constructor(tabbar: TabBar, insp: Inspector);
    private _createStatLabel;
    /** Update each properties of the stats panel */
    private _update;
    dispose(): void;
    active(b: boolean): void;
}
