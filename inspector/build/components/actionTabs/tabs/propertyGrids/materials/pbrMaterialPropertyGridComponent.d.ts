import * as React from "react";
import { Observable, PBRMaterial } from "babylonjs";
import { PropertyChangedEvent } from "../../../../propertyChangedEvent";
import { LockObject } from "../lockObject";
interface IPBRMaterialPropertyGridComponentProps {
    material: PBRMaterial;
    lockObject: LockObject;
    onSelectionChangedObservable?: Observable<any>;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export declare class PBRMaterialPropertyGridComponent extends React.Component<IPBRMaterialPropertyGridComponentProps> {
    constructor(props: IPBRMaterialPropertyGridComponentProps);
    renderTextures(): JSX.Element | null;
    render(): JSX.Element;
}
export {};
