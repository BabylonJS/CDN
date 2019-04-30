import * as React from "react";
import { Observable, Quaternion } from "babylonjs";
import { PropertyChangedEvent } from "../../propertyChangedEvent";
interface IQuaternionLineComponentProps {
    label: string;
    target: any;
    propertyName: string;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export declare class QuaternionLineComponent extends React.Component<IQuaternionLineComponentProps, {
    isExpanded: boolean;
    value: Quaternion;
}> {
    private _localChange;
    private _eulerValue;
    constructor(props: IQuaternionLineComponentProps);
    shouldComponentUpdate(nextProps: IQuaternionLineComponentProps, nextState: {
        isExpanded: boolean;
        value: Quaternion;
    }): boolean;
    switchExpandState(): void;
    raiseOnPropertyChanged(currentValue: Quaternion, previousValue: Quaternion): void;
    updateQuaternion(): void;
    updateStateX(value: number): void;
    updateStateY(value: number): void;
    updateStateZ(value: number): void;
    render(): JSX.Element;
}
export {};
