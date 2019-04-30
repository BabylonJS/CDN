import { IExplorerExtensibilityGroup } from "babylonjs";
import { Control } from "babylonjs-gui";
import * as React from 'react';
interface IControlTreeItemComponentProps {
    control: Control;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    onClick: () => void;
}
export declare class ControlTreeItemComponent extends React.Component<IControlTreeItemComponentProps, {
    isActive: boolean;
    isVisible: boolean;
}> {
    constructor(props: IControlTreeItemComponentProps);
    highlight(): void;
    switchVisibility(): void;
    render(): JSX.Element;
}
export {};
