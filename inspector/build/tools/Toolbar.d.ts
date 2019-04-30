import { BasicElement } from "../gui/BasicElement";
import { Inspector } from "../Inspector";
export declare class Toolbar extends BasicElement {
    private _inspector;
    private _tools;
    constructor(inspector: Inspector);
    update(): void;
    protected _build(): void;
    private _addTools;
    /**
     * Returns the total width in pixel of the tabbar,
     * that corresponds to the sum of the width of each tab + toolbar width
    */
    getPixelWidth(): number;
}
