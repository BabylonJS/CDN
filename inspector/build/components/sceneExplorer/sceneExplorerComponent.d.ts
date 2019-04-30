import * as React from "react";
import { Scene, Nullable, IExplorerExtensibilityGroup } from "babylonjs";
import { GlobalState } from "components/globalState";
interface ISceneExplorerFilterComponentProps {
    onFilter: (filter: string) => void;
}
export declare class SceneExplorerFilterComponent extends React.Component<ISceneExplorerFilterComponentProps> {
    constructor(props: ISceneExplorerFilterComponentProps);
    render(): JSX.Element;
}
interface ISceneExplorerComponentProps {
    scene: Scene;
    noCommands?: boolean;
    noHeader?: boolean;
    noExpand?: boolean;
    noClose?: boolean;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    globalState: GlobalState;
    popupMode?: boolean;
    onPopup?: () => void;
    onClose?: () => void;
}
export declare class SceneExplorerComponent extends React.Component<ISceneExplorerComponentProps, {
    filter: Nullable<string>;
    selectedEntity: any;
    scene: Scene;
}> {
    private _onSelectionChangeObserver;
    private _onNewSceneAddedObserver;
    private _once;
    private sceneMutationFunc;
    constructor(props: ISceneExplorerComponentProps);
    processMutation(): void;
    componentWillMount(): void;
    componentWillUnmount(): void;
    filterContent(filter: string): void;
    findSiblings(parent: any, items: any[], target: any, goNext: boolean, data: {
        previousOne?: any;
        found?: boolean;
    }): boolean;
    processKeys(keyEvent: React.KeyboardEvent<HTMLDivElement>): void;
    renderContent(): JSX.Element | null;
    onClose(): void;
    onPopup(): void;
    render(): JSX.Element;
}
export {};
