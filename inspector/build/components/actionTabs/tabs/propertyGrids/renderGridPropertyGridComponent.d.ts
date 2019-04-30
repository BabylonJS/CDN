import * as React from "react";
import { Scene } from "babylonjs";
interface IRenderGridPropertyGridComponentProps {
    scene: Scene;
}
export declare class RenderGridPropertyGridComponent extends React.Component<IRenderGridPropertyGridComponentProps, {
    isEnabled: boolean;
}> {
    private _gridMesh;
    constructor(props: IRenderGridPropertyGridComponentProps);
    componentWillMount(): void;
    addOrRemoveGrid(): void;
    render(): JSX.Element;
}
export {};
