import * as React from "react";
interface ITextLineComponentProps {
    label: string;
    value: string;
    color?: string;
    underline?: boolean;
    onLink?: () => void;
}
export declare class TextLineComponent extends React.Component<ITextLineComponentProps> {
    constructor(props: ITextLineComponentProps);
    onLink(): void;
    renderContent(): JSX.Element;
    render(): JSX.Element;
}
export {};
