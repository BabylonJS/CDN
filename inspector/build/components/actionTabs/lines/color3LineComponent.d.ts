import * as React from "react";
import { Observable, Color3 } from "babylonjs";
import { PropertyChangedEvent } from "../../propertyChangedEvent";
export interface IColor3LineComponentProps {
    label: string;
    target: any;
    propertyName: string;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export declare class Color3LineComponent extends React.Component<IColor3LineComponentProps, {
    isExpanded: boolean;
    color: Color3;
}> {
    private _localChange;
    constructor(props: IColor3LineComponentProps);
    shouldComponentUpdate(nextProps: IColor3LineComponentProps, nextState: {
        color: Color3;
    }): boolean;
    onChange(newValue: string): void;
    switchExpandState(): void;
    raiseOnPropertyChanged(previousValue: Color3): void;
    updateStateR(value: number): void;
    updateStateG(value: number): void;
    updateStateB(value: number): void;
    copyToClipboard(): void;
    render(): JSX.Element;
}
