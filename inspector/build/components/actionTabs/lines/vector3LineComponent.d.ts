import * as React from "react";
import { Vector3, Observable } from "babylonjs";
import { PropertyChangedEvent } from "../../propertyChangedEvent";
interface IVector3LineComponentProps {
    label: string;
    target: any;
    propertyName: string;
    onChange?: (newvalue: Vector3) => void;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export declare class Vector3LineComponent extends React.Component<IVector3LineComponentProps, {
    isExpanded: boolean;
    value: Vector3;
}> {
    private _localChange;
    constructor(props: IVector3LineComponentProps);
    shouldComponentUpdate(nextProps: IVector3LineComponentProps, nextState: {
        isExpanded: boolean;
        value: Vector3;
    }): boolean;
    switchExpandState(): void;
    raiseOnPropertyChanged(previousValue: Vector3): void;
    updateStateX(value: number): void;
    updateStateY(value: number): void;
    updateStateZ(value: number): void;
    render(): JSX.Element;
}
export {};
