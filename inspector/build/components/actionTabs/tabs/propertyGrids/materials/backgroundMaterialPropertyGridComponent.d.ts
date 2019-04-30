import * as React from "react";
import { Observable, BackgroundMaterial } from "babylonjs";
import { PropertyChangedEvent } from "../../../../propertyChangedEvent";
import { LockObject } from "../lockObject";
interface IBackgroundMaterialPropertyGridComponentProps {
    material: BackgroundMaterial;
    lockObject: LockObject;
    onSelectionChangedObservable?: Observable<any>;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export declare class BackgroundMaterialPropertyGridComponent extends React.Component<IBackgroundMaterialPropertyGridComponentProps> {
    constructor(props: IBackgroundMaterialPropertyGridComponentProps);
    renderTextures(): JSX.Element;
    render(): JSX.Element;
}
export {};
