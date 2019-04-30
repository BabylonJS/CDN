import { Color3, Color4 } from "babylonjs";
import { PropertyLine } from "../details/PropertyLine";
import { BasicElement } from "./BasicElement";
/**
 * Represents a html div element.
 * The div is built when an instance of BasicElement is created.
 */
export declare class ColorPickerElement extends BasicElement {
    protected _input: HTMLInputElement;
    private pline;
    constructor(color: Color4 | Color3, propertyLine: PropertyLine);
    update(color?: Color4 | Color3): void;
    private _toRgba;
}
