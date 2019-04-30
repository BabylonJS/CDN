import * as React from "react";
import { Nullable, IExplorerExtensibilityGroup } from "babylonjs";
import { GlobalState } from "../globalState";
export interface ITreeItemComponentProps {
    items?: Nullable<any[]>;
    label: string;
    offset: number;
    filter: Nullable<string>;
    globalState: GlobalState;
    entity?: any;
    selectedEntity: any;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
}
export declare class TreeItemComponent extends React.Component<ITreeItemComponentProps, {
    isExpanded: boolean;
    mustExpand: boolean;
}> {
    constructor(props: ITreeItemComponentProps);
    switchExpandedState(): void;
    shouldComponentUpdate(nextProps: ITreeItemComponentProps, nextState: {
        isExpanded: boolean;
    }): boolean;
    expandAll(expand: boolean): void;
    render(): JSX.Element;
}
