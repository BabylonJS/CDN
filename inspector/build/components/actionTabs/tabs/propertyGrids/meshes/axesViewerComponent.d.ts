import * as React from "react";
import { TransformNode } from "babylonjs";
interface IAxisViewerComponentProps {
    node: TransformNode;
}
export declare class AxesViewerComponent extends React.Component<IAxisViewerComponentProps, {
    displayAxis: boolean;
}> {
    constructor(props: IAxisViewerComponentProps);
    displayAxes(): void;
    render(): JSX.Element;
}
export {};
