import { AbstractTreeTool } from "./AbstractTreeTool";
export interface ISoundInteractions {
    setPlaying: (callback: Function) => void;
}
/**
 *
 */
export declare class SoundInteractions extends AbstractTreeTool {
    private playSound;
    constructor(playSound: ISoundInteractions);
    protected action(): void;
    private _playSound;
}
