import { IExplorerExtensibilityGroup, Observable } from "babylonjs";
import * as React from 'react';
import { AdvancedDynamicTexture } from 'babylonjs-gui';
interface IAdvancedDynamicTextureTreeItemComponentProps {
    texture: AdvancedDynamicTexture;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    onSelectionChangedObservable?: Observable<any>;
    onClick: () => void;
}
export declare class AdvancedDynamicTextureTreeItemComponent extends React.Component<IAdvancedDynamicTextureTreeItemComponentProps, {
    isInPickingMode: boolean;
}> {
    private _onControlPickedObserver;
    constructor(props: IAdvancedDynamicTextureTreeItemComponentProps);
    componentWillUnmount(): void;
    onPickingMode(): void;
    render(): JSX.Element;
}
export {};
