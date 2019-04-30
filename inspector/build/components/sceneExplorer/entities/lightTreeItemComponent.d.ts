import { Light, IExplorerExtensibilityGroup } from "babylonjs";
import * as React from "react";
import { GlobalState } from "../../globalState";
interface ILightTreeItemComponentProps {
    light: Light;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    onClick: () => void;
    globalState: GlobalState;
}
export declare class LightTreeItemComponent extends React.Component<ILightTreeItemComponentProps, {
    isEnabled: boolean;
}> {
    constructor(props: ILightTreeItemComponentProps);
    switchIsEnabled(): void;
    render(): JSX.Element;
}
export {};
