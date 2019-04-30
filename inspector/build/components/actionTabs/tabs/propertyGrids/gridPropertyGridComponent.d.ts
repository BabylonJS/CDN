import * as React from "react";
import { Scene } from "babylonjs";
interface IGridPropertyGridComponentProps {
    scene: Scene;
}
export declare class GridPropertyGridComponent extends React.Component<IGridPropertyGridComponentProps, {
    isEnabled: boolean;
}> {
    private _gridMesh;
    constructor(props: IGridPropertyGridComponentProps);
    componentWillMount(): void;
    addOrRemoveGrid(): void;
    render(): JSX.Element;
}
export {};
