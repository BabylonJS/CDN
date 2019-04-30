import { AbstractTreeTool } from "./AbstractTreeTool";
/** Any object implementing this interface should
 * provide methods to toggle a debug area
 */
export interface IToolDebug {
    debug: (b: boolean) => void;
}
export declare class DebugArea extends AbstractTreeTool {
    private _obj;
    constructor(obj: IToolDebug);
    protected action(): void;
}
