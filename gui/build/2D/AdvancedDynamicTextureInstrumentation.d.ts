import { IDisposable, PerfCounter } from "babylonjs";
import { AdvancedDynamicTexture } from "./advancedDynamicTexture";
/**
 * This class can be used to get instrumentation data from a AdvancedDynamicTexture object
 */
export declare class AdvancedDynamicTextureInstrumentation implements IDisposable {
    /**
     * Define the instrumented AdvancedDynamicTexture.
     */
    texture: AdvancedDynamicTexture;
    private _captureRenderTime;
    private _renderTime;
    private _captureLayoutTime;
    private _layoutTime;
    private _onBeginRenderObserver;
    private _onEndRenderObserver;
    private _onBeginLayoutObserver;
    private _onEndLayoutObserver;
    /**
     * Gets the perf counter used to capture render time
     */
    readonly renderTimeCounter: PerfCounter;
    /**
     * Gets the perf counter used to capture layout time
     */
    readonly layoutTimeCounter: PerfCounter;
    /**
     * Enable or disable the render time capture
     */
    captureRenderTime: boolean;
    /**
     * Enable or disable the layout time capture
     */
    captureLayoutTime: boolean;
    /**
     * Instantiates a new advanced dynamic texture instrumentation.
     * This class can be used to get instrumentation data from an AdvancedDynamicTexture object
     * @param texture Defines the AdvancedDynamicTexture to instrument
     */
    constructor(
    /**
     * Define the instrumented AdvancedDynamicTexture.
     */
    texture: AdvancedDynamicTexture);
    /**
     * Dispose and release associated resources.
     */
    dispose(): void;
}
