import { Inspector } from "../Inspector";
export declare abstract class AbstractTool {
    private _elem;
    protected _inspector: Inspector;
    constructor(iconSet: string, icon: string, parent: HTMLElement, inspector: Inspector, tooltip: string);
    toHtml(): HTMLElement;
    /**
     * Returns the total width in pixel of this tool, 0 by default
    */
    getPixelWidth(): number;
    /**
     * Updates the icon of this tool with the given string
     */
    protected _updateIcon(icon: string): void;
    abstract action(): void;
}
