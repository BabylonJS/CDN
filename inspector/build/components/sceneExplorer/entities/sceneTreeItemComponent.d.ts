import { Scene, Observable, IExplorerExtensibilityGroup } from "babylonjs";
import * as React from "react";
interface ISceneTreeItemComponentProps {
    scene: Scene;
    onRefresh: () => void;
    selectedEntity?: any;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    onSelectionChangedObservable?: Observable<any>;
}
export declare class SceneTreeItemComponent extends React.Component<ISceneTreeItemComponentProps, {
    isSelected: boolean;
    isInPickingMode: boolean;
    gizmoMode: number;
}> {
    private _onPointerObserver;
    private _onSelectionChangeObserver;
    private _selectedEntity;
    constructor(props: ISceneTreeItemComponentProps);
    shouldComponentUpdate(nextProps: ISceneTreeItemComponentProps, nextState: {
        isSelected: boolean;
        isInPickingMode: boolean;
    }): boolean;
    componentWillMount(): void;
    componentWillUnmount(): void;
    onSelect(): void;
    onPickingMode(): void;
    setGizmoMode(mode: number): void;
    render(): JSX.Element;
}
export {};
