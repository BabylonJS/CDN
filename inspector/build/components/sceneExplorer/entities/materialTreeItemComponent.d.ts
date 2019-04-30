import { Material, IExplorerExtensibilityGroup } from "babylonjs";
import * as React from 'react';
interface IMaterialTreeItemComponentProps {
    material: Material;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    onClick: () => void;
}
export declare class MaterialTreeItemComponent extends React.Component<IMaterialTreeItemComponentProps> {
    constructor(props: IMaterialTreeItemComponentProps);
    render(): JSX.Element;
}
export {};
