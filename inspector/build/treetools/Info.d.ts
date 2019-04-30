import { AbstractTreeTool } from "./AbstractTreeTool";
/** Any object implementing this interface should
 * provide methods to retrieve its info
 */
export interface IToolInfo {
    getInfo: () => string;
}
/**
 * Checkbox to display/hide the primitive
 */
export declare class Info extends AbstractTreeTool {
    private _obj;
    constructor(obj: IToolInfo);
    protected action(): void;
}
