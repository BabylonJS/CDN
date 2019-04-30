import * as React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
interface IMessageLineComponentProps {
    text: string;
    color?: string;
    icon?: IconProp;
}
export declare class MessageLineComponent extends React.Component<IMessageLineComponentProps> {
    constructor(props: IMessageLineComponentProps);
    render(): JSX.Element;
}
export {};
