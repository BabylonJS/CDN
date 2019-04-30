import { Measure } from "../../measure";
import { Container } from "../container";
/**
 * Class used to hold a the container for ScrollViewer
 * @hidden
*/
export declare class _ScrollViewerWindow extends Container {
    parentClientWidth: number;
    parentClientHeight: number;
    /**
    * Creates a new ScrollViewerWindow
    * @param name of ScrollViewerWindow
    */
    constructor(name?: string);
    protected _getTypeName(): string;
    /** @hidden */
    protected _additionalProcessing(parentMeasure: Measure, context: CanvasRenderingContext2D): void;
    protected _postMeasure(): void;
}
