import * as React from "react";
import { Mesh, Observable } from "babylonjs";
import { PropertyChangedEvent } from "../../../../propertyChangedEvent";
import { LockObject } from "../lockObject";
interface IMeshPropertyGridComponentProps {
    mesh: Mesh;
    lockObject: LockObject;
    onSelectionChangedObservable?: Observable<any>;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export declare class MeshPropertyGridComponent extends React.Component<IMeshPropertyGridComponentProps, {
    displayNormals: boolean;
    renderNormalVectors: boolean;
}> {
    constructor(props: IMeshPropertyGridComponentProps);
    renderNormalVectors(): void;
    displayNormals(): void;
    onMaterialLink(): void;
    convertPhysicsTypeToString(): string;
    render(): JSX.Element;
}
export {};
