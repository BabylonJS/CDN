import { IDisposable, Observable } from "babylonjs";
import { AdvancedDynamicTexture } from "./advancedDynamicTexture";
import { ValueAndUnit } from "./valueAndUnit";
/**
 * Define a style used by control to automatically setup properties based on a template.
 * Only support font related properties so far
 */
export declare class Style implements IDisposable {
    private _fontFamily;
    private _fontStyle;
    private _fontWeight;
    /** @hidden */
    _host: AdvancedDynamicTexture;
    /** @hidden */
    _fontSize: ValueAndUnit;
    /**
     * Observable raised when the style values are changed
     */
    onChangedObservable: Observable<Style>;
    /**
     * Creates a new style object
     * @param host defines the AdvancedDynamicTexture which hosts this style
     */
    constructor(host: AdvancedDynamicTexture);
    /**
     * Gets or sets the font size
     */
    fontSize: string | number;
    /**
     * Gets or sets the font family
     */
    fontFamily: string;
    /**
     * Gets or sets the font style
     */
    fontStyle: string;
    /** Gets or sets font weight */
    fontWeight: string;
    /** Dispose all associated resources */
    dispose(): void;
}
