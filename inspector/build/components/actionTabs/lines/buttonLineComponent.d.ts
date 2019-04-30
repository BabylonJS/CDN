import * as React from "react";
export interface IButtonLineComponentProps {
    label: string;
    onClick: () => void;
}
export declare class ButtonLineComponent extends React.Component<IButtonLineComponentProps> {
    constructor(props: IButtonLineComponentProps);
    render(): JSX.Element;
}
