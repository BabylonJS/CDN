import * as React from "react";
interface IFileButtonLineComponentProps {
    label: string;
    onClick: (file: File) => void;
    accept: string;
}
export declare class FileButtonLineComponent extends React.Component<IFileButtonLineComponentProps> {
    constructor(props: IFileButtonLineComponentProps);
    onChange(evt: any): void;
    render(): JSX.Element;
}
export {};
