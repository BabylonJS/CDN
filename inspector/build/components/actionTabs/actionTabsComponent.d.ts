import * as React from "react";
import { Scene } from "babylonjs";
import { GlobalState } from "components/globalState";
interface IActionTabsComponentProps {
    scene: Scene;
    noCommands?: boolean;
    noHeader?: boolean;
    noExpand?: boolean;
    noClose?: boolean;
    popupMode?: boolean;
    onPopup?: () => void;
    onClose?: () => void;
    globalState: GlobalState;
}
export declare class ActionTabsComponent extends React.Component<IActionTabsComponentProps, {
    selectedEntity: any;
    selectedIndex: number;
}> {
    private _onSelectionChangeObserver;
    private _onTabChangedObserver;
    private _once;
    constructor(props: IActionTabsComponentProps);
    componentWillMount(): void;
    componentWillUnmount(): void;
    changeSelectedTab(index: number): void;
    renderContent(): JSX.Element;
    onClose(): void;
    onPopup(): void;
    render(): JSX.Element;
}
export {};
