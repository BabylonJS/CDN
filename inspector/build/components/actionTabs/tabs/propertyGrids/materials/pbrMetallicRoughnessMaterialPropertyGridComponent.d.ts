import * as React from "react";
import { Observable, PBRMetallicRoughnessMaterial } from "babylonjs";
import { PropertyChangedEvent } from "../../../../propertyChangedEvent";
import { LockObject } from "../lockObject";
interface IPBRMetallicRoughnessMaterialPropertyGridComponentProps {
    material: PBRMetallicRoughnessMaterial;
    lockObject: LockObject;
    onSelectionChangedObservable?: Observable<any>;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export declare class PBRMetallicRoughnessMaterialPropertyGridComponent extends React.Component<IPBRMetallicRoughnessMaterialPropertyGridComponentProps> {
    constructor(props: IPBRMetallicRoughnessMaterialPropertyGridComponentProps);
    renderTextures(): JSX.Element | null;
    render(): JSX.Element;
}
export {};
