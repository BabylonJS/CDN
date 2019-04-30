import * as React from "react";
import { PaneComponent } from "./paneComponent";
interface ITabsComponentProps {
    children: any[];
    selectedIndex: number;
    onSelectedIndexChange: (value: number) => void;
}
export declare class TabsComponent extends React.Component<ITabsComponentProps> {
    constructor(props: ITabsComponentProps);
    onSelect(index: number): void;
    renderLabel(child: PaneComponent, index: number): JSX.Element;
    render(): JSX.Element;
}
export {};
