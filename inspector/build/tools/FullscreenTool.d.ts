import { AbstractTool } from "./AbstractTool";
import { Inspector } from "../Inspector";
export declare class FullscreenTool extends AbstractTool {
    constructor(parent: HTMLElement, inspector: Inspector);
    action(): void;
}
