import * as React from "react";
import { Observable, IShadowLight } from "babylonjs";
import { PropertyChangedEvent } from "../../../../propertyChangedEvent";
import { LockObject } from "../lockObject";
interface ICommonShadowLightPropertyGridComponentProps {
    light: IShadowLight;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export declare class CommonShadowLightPropertyGridComponent extends React.Component<ICommonShadowLightPropertyGridComponentProps> {
    constructor(props: ICommonShadowLightPropertyGridComponentProps);
    render(): JSX.Element;
}
export {};
