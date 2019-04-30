import { Inspector } from "../Inspector";
import { AbstractTool } from "./AbstractTool";
export declare class LabelTool extends AbstractTool {
    /** True if label are displayed, false otherwise */
    private _isDisplayed;
    private _advancedTexture;
    private _labelInitialized;
    private _scene;
    constructor(parent: HTMLElement, inspector: Inspector);
    dispose(): void;
    private _checkGUILoaded;
    private _initializeLabels;
    private _createLabel;
    private _removeLabel;
    action(): void;
}
