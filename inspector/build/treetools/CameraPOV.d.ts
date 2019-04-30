import { AbstractTreeTool } from "./AbstractTreeTool";
export interface ICameraPOV {
    setPOV: () => void;
    getCurrentActiveCamera: () => string;
    id: () => string;
}
/**
 *
 */
export declare class CameraPOV extends AbstractTreeTool {
    private cameraPOV;
    constructor(camera: ICameraPOV);
    protected action(): void;
    private _gotoPOV;
}
