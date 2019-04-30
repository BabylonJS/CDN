import * as React from "react";
import { Observable } from "babylonjs";
import { PropertyChangedEvent } from "../../propertyChangedEvent";
declare class ListLineOption {
    label: string;
    value: number;
}
interface IOptionsLineComponentProps {
    label: string;
    target: any;
    propertyName: string;
    options: ListLineOption[];
    noDirectUpdate?: boolean;
    onSelect?: (value: number) => void;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export declare class OptionsLineComponent extends React.Component<IOptionsLineComponentProps, {
    value: number;
}> {
    private _localChange;
    constructor(props: IOptionsLineComponentProps);
    shouldComponentUpdate(nextProps: IOptionsLineComponentProps, nextState: {
        value: number;
    }): boolean;
    raiseOnPropertyChanged(newValue: number, previousValue: number): void;
    updateValue(valueString: string): void;
    render(): JSX.Element;
}
export {};
