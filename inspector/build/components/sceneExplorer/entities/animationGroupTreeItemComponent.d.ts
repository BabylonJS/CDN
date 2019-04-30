import { IExplorerExtensibilityGroup, AnimationGroup } from "babylonjs";
import * as React from "react";
interface IAnimationGroupItemComponentProps {
    animationGroup: AnimationGroup;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    onClick: () => void;
}
export declare class AnimationGroupItemComponent extends React.Component<IAnimationGroupItemComponentProps> {
    constructor(props: IAnimationGroupItemComponentProps);
    render(): JSX.Element;
}
export {};
