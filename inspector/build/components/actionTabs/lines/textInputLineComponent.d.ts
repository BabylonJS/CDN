import * as React from "react";
import { Observable } from "babylonjs";
import { PropertyChangedEvent } from "components/propertyChangedEvent";
import { LockObject } from "../tabs/propertyGrids/lockObject";
interface ITextInputLineComponentProps {
    label: string;
    lockObject: LockObject;
    target?: any;
    propertyName?: string;
    value?: string;
    onChange?: (value: string) => void;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export declare class TextInputLineComponent extends React.Component<ITextInputLineComponentProps, {
    value: string;
}> {
    private _localChange;
    constructor(props: ITextInputLineComponentProps);
    componentWillUnmount(): void;
    shouldComponentUpdate(nextProps: ITextInputLineComponentProps, nextState: {
        value: string;
    }): boolean;
    raiseOnPropertyChanged(newValue: string, previousValue: string): void;
    updateValue(value: string): void;
    render(): JSX.Element;
}
export {};
