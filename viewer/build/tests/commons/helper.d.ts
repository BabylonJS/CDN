import { BABYLON, AbstractViewer, DefaultViewer, ViewerModel } from "../../src";
import { ViewerConfiguration } from "../../src/configuration/configuration";
export declare const useNullEngine = true;
export declare class Helper {
    static getNewViewerInstance(element?: HTMLElement, configuration?: ViewerConfiguration, useAbstractViewer?: boolean): DefaultViewer | NullEngineAbstractViewer | ImplementedAbstractViewer;
    static createViewer(options?: ViewerConfiguration): AbstractViewer;
    static disposeViewer(): void;
    static getViewerContainer(): HTMLElement;
    static getReferenceCanvas(): HTMLCanvasElement;
    static getRenderImg(): HTMLImageElement;
    static getReferenceImg(): HTMLImageElement;
    static getResultDisplay(): HTMLDivElement;
    static createMockMesh(viewer: AbstractViewer): BABYLON.Mesh;
    static MockScreenCapture(viewer: AbstractViewer, data: any): void;
    static MockModelAnimation(model: ViewerModel, name: string): void;
    static mockScreenCaptureData(): string;
    static roundToDp(value: number, dp: number): number;
    static GetPBRMaterial(material: BABYLON.Material, assert: any): BABYLON.PBRMaterial;
    private static viewer;
}
export declare class ImplementedAbstractViewer extends AbstractViewer {
    protected _prepareContainerElement(): void;
}
export declare class NullEngineAbstractViewer extends AbstractViewer {
    protected _prepareContainerElement(): void;
    protected _initEngine(): Promise<BABYLON.Engine>;
}
export declare class NullEngineDefaultViewer extends DefaultViewer {
    protected _initEngine(): Promise<BABYLON.Engine>;
}
