import * as React from "react";
export interface IBooleanLineComponentProps {
    label: string;
    value: boolean;
}
export declare class BooleanLineComponent extends React.Component<IBooleanLineComponentProps> {
    constructor(props: IBooleanLineComponentProps);
    render(): JSX.Element;
}
