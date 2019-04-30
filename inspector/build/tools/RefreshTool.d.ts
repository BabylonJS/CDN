import { Inspector } from "../Inspector";
import { AbstractTool } from "./AbstractTool";
export declare class RefreshTool extends AbstractTool {
    constructor(parent: HTMLElement, inspector: Inspector);
    action(): void;
}
