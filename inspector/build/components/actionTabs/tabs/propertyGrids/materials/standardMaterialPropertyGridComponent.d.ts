import * as React from "react";
import { Observable, StandardMaterial } from "babylonjs";
import { PropertyChangedEvent } from "../../../../propertyChangedEvent";
import { LockObject } from "../lockObject";
interface IStandardMaterialPropertyGridComponentProps {
    material: StandardMaterial;
    lockObject: LockObject;
    onSelectionChangedObservable?: Observable<any>;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export declare class StandardMaterialPropertyGridComponent extends React.Component<IStandardMaterialPropertyGridComponentProps> {
    constructor(props: IStandardMaterialPropertyGridComponentProps);
    renderTextures(): JSX.Element | null;
    render(): JSX.Element;
}
export {};
