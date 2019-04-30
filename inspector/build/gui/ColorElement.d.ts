import { Color3, Color4 } from "babylonjs";
import { BasicElement } from "./BasicElement";
/**
* Display a very small div corresponding to the given color
*/
export declare class ColorElement extends BasicElement {
    constructor(color: Color4 | Color3);
    update(color?: Color4 | Color3): void;
    private _toRgba;
}
