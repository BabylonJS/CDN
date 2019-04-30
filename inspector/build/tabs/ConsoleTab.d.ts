import { Inspector } from "../Inspector";
import { Tab } from "./Tab";
import { TabBar } from "./TabBar";
/**
 * The console tab will have two features :
 * - hook all console.log call and display them in this panel (and in the browser console as well)
 * - display all Babylon logs (called with Tools.Log...)
 */
export declare class ConsoleTab extends Tab {
    private _inspector;
    private _consolePanelContent;
    private _bjsPanelContent;
    private _oldConsoleLog;
    private _oldConsoleWarn;
    private _oldConsoleError;
    constructor(tabbar: TabBar, insp: Inspector);
    /** Overrides super.dispose */
    dispose(): void;
    active(b: boolean): void;
    private _message;
    private _addConsoleLog;
    private _addConsoleWarn;
    private _addConsoleError;
}
