import { AbstractMesh, IExplorerExtensibilityGroup } from "babylonjs";
import * as React from "react";
interface IMeshTreeItemComponentProps {
    mesh: AbstractMesh;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    onClick: () => void;
}
export declare class MeshTreeItemComponent extends React.Component<IMeshTreeItemComponentProps, {
    isGizmoEnabled: boolean;
    isVisible: boolean;
}> {
    constructor(props: IMeshTreeItemComponentProps);
    showGizmos(): void;
    switchVisibility(): void;
    render(): JSX.Element;
}
export {};
