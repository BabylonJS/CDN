import { Nullable } from "babylonjs";
/**
 * Creates a tooltip for the parent of the given html element
 */
export declare class Tooltip {
    /** The tooltip is displayed for this element */
    private _elem;
    /** The tooltip div */
    private _infoDiv;
    constructor(elem: HTMLElement, tip: string, attachTo?: Nullable<HTMLElement>);
}
