import { Inspector } from "../Inspector";
import { AbstractTool } from "./AbstractTool";
export declare class PopupTool extends AbstractTool {
    constructor(parent: HTMLElement, inspector: Inspector);
    action(): void;
}
