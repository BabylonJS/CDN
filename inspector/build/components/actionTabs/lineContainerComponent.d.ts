import * as React from "react";
interface ILineContainerComponentProps {
    title: string;
    children: any[] | any;
    closed?: boolean;
}
export declare class LineContainerComponent extends React.Component<ILineContainerComponentProps, {
    isExpanded: boolean;
}> {
    private static _InMemoryStorage;
    constructor(props: ILineContainerComponentProps);
    switchExpandedState(): void;
    renderHeader(): JSX.Element;
    render(): JSX.Element;
}
export {};
