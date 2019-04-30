import * as React from "react";
import { Observable, Scene } from "babylonjs";
import { PropertyChangedEvent } from "../../../propertyChangedEvent";
import { LockObject } from "./lockObject";
interface IFogPropertyGridComponentProps {
    scene: Scene;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export declare class FogPropertyGridComponent extends React.Component<IFogPropertyGridComponentProps, {
    mode: number;
}> {
    constructor(props: IFogPropertyGridComponentProps);
    render(): JSX.Element;
}
export {};
