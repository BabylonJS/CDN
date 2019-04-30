import { BaseSlider } from "./baseSlider";
/**
 * Class used to create slider controls
 */
export declare class Slider extends BaseSlider {
    name?: string | undefined;
    private _background;
    private _borderColor;
    private _isThumbCircle;
    protected _displayValueBar: boolean;
    /** Gets or sets a boolean indicating if the value bar must be rendered */
    displayValueBar: boolean;
    /** Gets or sets border color */
    borderColor: string;
    /** Gets or sets background color */
    background: string;
    /** Gets or sets a boolean indicating if the thumb should be round or square */
    isThumbCircle: boolean;
    /**
     * Creates a new Slider
     * @param name defines the control name
     */
    constructor(name?: string | undefined);
    protected _getTypeName(): string;
    _draw(context: CanvasRenderingContext2D): void;
}
