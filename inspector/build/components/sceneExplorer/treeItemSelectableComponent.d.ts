import { Nullable, IExplorerExtensibilityGroup } from "babylonjs";
import * as React from "react";
import { GlobalState } from "../globalState";
export interface ITreeItemSelectableComponentProps {
    entity: any;
    selectedEntity?: any;
    mustExpand?: boolean;
    offset: number;
    globalState: GlobalState;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    filter: Nullable<string>;
}
export declare class TreeItemSelectableComponent extends React.Component<ITreeItemSelectableComponentProps, {
    isExpanded: boolean;
    isSelected: boolean;
}> {
    private _wasSelected;
    constructor(props: ITreeItemSelectableComponentProps);
    switchExpandedState(): void;
    shouldComponentUpdate(nextProps: ITreeItemSelectableComponentProps, nextState: {
        isExpanded: boolean;
        isSelected: boolean;
    }): boolean;
    scrollIntoView(): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    onSelect(): void;
    renderChildren(): JSX.Element[] | null;
    render(): JSX.Element | null;
}
