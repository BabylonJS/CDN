import { Control } from "./control";
import { Nullable, Observable } from "babylonjs";
import { Measure } from "../measure";
/**
 * Class used to create 2D images
 */
export declare class Image extends Control {
    name?: string | undefined;
    private static _WorkingCanvas;
    private _domImage;
    private _imageWidth;
    private _imageHeight;
    private _loaded;
    private _stretch;
    private _source;
    private _autoScale;
    private _sourceLeft;
    private _sourceTop;
    private _sourceWidth;
    private _sourceHeight;
    private _cellWidth;
    private _cellHeight;
    private _cellId;
    private _populateNinePatchSlicesFromImage;
    private _sliceLeft;
    private _sliceRight;
    private _sliceTop;
    private _sliceBottom;
    /**
     * Observable notified when the content is loaded
     */
    onImageLoadedObservable: Observable<Image>;
    /**
     * Gets a boolean indicating that the content is loaded
     */
    readonly isLoaded: boolean;
    /**
     * Gets or sets a boolean indicating if nine patch slices (left, top, right, bottom) should be read from image data
     */
    populateNinePatchSlicesFromImage: boolean;
    /**
     * Gets or sets the left value for slicing (9-patch)
     */
    sliceLeft: number;
    /**
     * Gets or sets the right value for slicing (9-patch)
     */
    sliceRight: number;
    /**
     * Gets or sets the top value for slicing (9-patch)
     */
    sliceTop: number;
    /**
     * Gets or sets the bottom value for slicing (9-patch)
     */
    sliceBottom: number;
    /**
     * Gets or sets the left coordinate in the source image
     */
    sourceLeft: number;
    /**
     * Gets or sets the top coordinate in the source image
     */
    sourceTop: number;
    /**
     * Gets or sets the width to capture in the source image
     */
    sourceWidth: number;
    /**
     * Gets or sets the height to capture in the source image
     */
    sourceHeight: number;
    /**
     * Gets or sets a boolean indicating if the image can force its container to adapt its size
     * @see http://doc.babylonjs.com/how_to/gui#image
     */
    autoScale: boolean;
    /** Gets or sets the streching mode used by the image */
    stretch: number;
    /**
     * Gets or sets the internal DOM image used to render the control
     */
    domImage: HTMLImageElement;
    private _onImageLoaded;
    private _extractNinePatchSliceDataFromImage;
    /**
     * Gets or sets image source url
     */
    source: Nullable<string>;
    /**
     * Gets or sets the cell width to use when animation sheet is enabled
     * @see http://doc.babylonjs.com/how_to/gui#image
     */
    cellWidth: number;
    /**
     * Gets or sets the cell height to use when animation sheet is enabled
     * @see http://doc.babylonjs.com/how_to/gui#image
     */
    cellHeight: number;
    /**
     * Gets or sets the cell id to use (this will turn on the animation sheet mode)
     * @see http://doc.babylonjs.com/how_to/gui#image
     */
    cellId: number;
    /**
     * Creates a new Image
     * @param name defines the control name
     * @param url defines the image url
     */
    constructor(name?: string | undefined, url?: Nullable<string>);
    protected _getTypeName(): string;
    /** Force the control to synchronize with its content */
    synchronizeSizeWithContent(): void;
    protected _processMeasures(parentMeasure: Measure, context: CanvasRenderingContext2D): void;
    _draw(context: CanvasRenderingContext2D): void;
    private _renderCornerPatch;
    private _renderNinePatch;
    dispose(): void;
    /** STRETCH_NONE */
    static readonly STRETCH_NONE: number;
    /** STRETCH_FILL */
    static readonly STRETCH_FILL: number;
    /** STRETCH_UNIFORM */
    static readonly STRETCH_UNIFORM: number;
    /** STRETCH_EXTEND */
    static readonly STRETCH_EXTEND: number;
    /** NINE_PATCH */
    static readonly STRETCH_NINE_PATCH: number;
}
