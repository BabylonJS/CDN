import { Inspector } from "../Inspector";
import { AbstractTool } from "./AbstractTool";
export declare class PauseScheduleTool extends AbstractTool {
    private _isPause;
    constructor(parent: HTMLElement, inspector: Inspector);
    action(): void;
}
