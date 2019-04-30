import * as React from "react";
import { Camera, Observable } from "babylonjs";
import { PropertyChangedEvent } from "../../../../propertyChangedEvent";
import { LockObject } from "../lockObject";
interface ICommonCameraPropertyGridComponentProps {
    camera: Camera;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export declare class CommonCameraPropertyGridComponent extends React.Component<ICommonCameraPropertyGridComponentProps, {
    mode: number;
}> {
    constructor(props: ICommonCameraPropertyGridComponentProps);
    render(): JSX.Element;
}
export {};
