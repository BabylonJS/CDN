import { Camera, IExplorerExtensibilityGroup } from "babylonjs";
import * as React from "react";
interface ICameraTreeItemComponentProps {
    camera: Camera;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    onClick: () => void;
}
export declare class CameraTreeItemComponent extends React.Component<ICameraTreeItemComponentProps, {
    isActive: boolean;
}> {
    private _onActiveCameraObserver;
    constructor(props: ICameraTreeItemComponentProps);
    setActive(): void;
    componentWillMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
