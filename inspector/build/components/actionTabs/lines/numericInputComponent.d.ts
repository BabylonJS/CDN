import * as React from "react";
interface INumericInputComponentProps {
    label: string;
    value: number;
    onChange: (value: number) => void;
}
export declare class NumericInputComponent extends React.Component<INumericInputComponentProps, {
    value: string;
}> {
    private _localChange;
    constructor(props: INumericInputComponentProps);
    shouldComponentUpdate(nextProps: INumericInputComponentProps, nextState: {
        value: string;
    }): boolean;
    updateValue(evt: any): void;
    render(): JSX.Element;
}
export {};
