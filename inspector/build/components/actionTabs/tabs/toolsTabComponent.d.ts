/// <reference types="react" />
import { PaneComponent, IPaneComponentProps } from "../paneComponent";
import { TransformNode } from "babylonjs";
export declare class ToolsTabComponent extends PaneComponent {
    private _videoRecorder;
    constructor(props: IPaneComponentProps);
    componentWillMount(): void;
    componentWillUnmount(): void;
    captureScreenshot(): void;
    recordVideo(): void;
    shouldExport(transformNode: TransformNode): boolean;
    exportGLTF(): void;
    exportBabylon(): void;
    createEnvTexture(): void;
    render(): JSX.Element | null;
}
