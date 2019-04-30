import { TransformNode, IExplorerExtensibilityGroup } from "babylonjs";
import * as React from "react";
interface ITransformNodeItemComponentProps {
    transformNode: TransformNode;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    onClick: () => void;
}
export declare class TransformNodeItemComponent extends React.Component<ITransformNodeItemComponentProps> {
    constructor(props: ITransformNodeItemComponentProps);
    render(): JSX.Element;
}
export {};
