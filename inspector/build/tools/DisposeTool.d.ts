import { AbstractTool } from "./AbstractTool";
import { Inspector } from "../Inspector";
/**
 * Removes the inspector panel
 */
export declare class DisposeTool extends AbstractTool {
    constructor(parent: HTMLElement, inspector: Inspector);
    action(): void;
}
