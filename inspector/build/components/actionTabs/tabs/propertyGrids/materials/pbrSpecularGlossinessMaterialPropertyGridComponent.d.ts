import * as React from "react";
import { Observable, PBRSpecularGlossinessMaterial } from "babylonjs";
import { PropertyChangedEvent } from "../../../../propertyChangedEvent";
import { LockObject } from "../lockObject";
interface IPBRSpecularGlossinessMaterialPropertyGridComponentProps {
    material: PBRSpecularGlossinessMaterial;
    lockObject: LockObject;
    onSelectionChangedObservable?: Observable<any>;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export declare class PBRSpecularGlossinessMaterialPropertyGridComponent extends React.Component<IPBRSpecularGlossinessMaterialPropertyGridComponentProps> {
    constructor(props: IPBRSpecularGlossinessMaterialPropertyGridComponentProps);
    renderTextures(): JSX.Element | null;
    render(): JSX.Element;
}
export {};
