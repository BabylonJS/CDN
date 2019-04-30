import { IExplorerExtensibilityGroup } from "babylonjs";
import * as React from "react";
import { GlobalState } from "../globalState";
interface ITreeItemSpecializedComponentProps {
    label: string;
    entity?: any;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    globalState: GlobalState;
    onClick?: () => void;
}
export declare class TreeItemSpecializedComponent extends React.Component<ITreeItemSpecializedComponentProps> {
    constructor(props: ITreeItemSpecializedComponentProps);
    onClick(): void;
    render(): JSX.Element;
}
export {};
