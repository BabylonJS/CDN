import { BaseSlider } from "./baseSlider";
import { Image } from "../image";
/**
 * Class used to create slider controls based on images
 */
export declare class ImageBasedSlider extends BaseSlider {
    name?: string | undefined;
    private _backgroundImage;
    private _thumbImage;
    private _valueBarImage;
    private _tempMeasure;
    displayThumb: boolean;
    /**
     * Gets or sets the image used to render the background
     */
    backgroundImage: Image;
    /**
     * Gets or sets the image used to render the value bar
     */
    valueBarImage: Image;
    /**
     * Gets or sets the image used to render the thumb
     */
    thumbImage: Image;
    /**
     * Creates a new ImageBasedSlider
     * @param name defines the control name
     */
    constructor(name?: string | undefined);
    protected _getTypeName(): string;
    _draw(context: CanvasRenderingContext2D): void;
}
