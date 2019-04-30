import { Inspector } from "../Inspector";
import { Tab } from "./Tab";
import { TabBar } from "./TabBar";
export declare class GLTFTab extends Tab {
    private static _LoaderDefaults;
    private static _ValidationResults;
    private static _OnValidationResultsUpdated;
    private _inspector;
    private _actions;
    private _detailsPanel;
    private _split;
    static readonly IsSupported: boolean;
    /** @hidden */
    static _Initialize(): void;
    constructor(tabbar: TabBar, inspector: Inspector);
    dispose(): void;
    private _addImport;
    private static _FormatValidationResultsShort;
    private static _ShowValidationResults;
    private static _ApplyLoaderDefaults;
    private static _GetPublic;
    /** @hidden */
    static _GetLoaderDefaultsAsync(): Promise<any>;
    private _openDetailsPanel;
    private _closeDetailsPanel;
    private _showLoaderDefaults;
    private _showLoaderExtensionDefaults;
    private _addExport;
    private static _IsSkyBox;
}
