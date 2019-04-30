import * as React from "react";
import { BaseTexture, Observable, Material, Nullable } from "babylonjs";
export interface ITextureLinkLineComponentProps {
    label: string;
    texture: Nullable<BaseTexture>;
    material?: Material;
    onSelectionChangedObservable?: Observable<any>;
    onDebugSelectionChangeObservable?: Observable<BaseTexture>;
}
export declare class TextureLinkLineComponent extends React.Component<ITextureLinkLineComponentProps, {
    isDebugSelected: boolean;
}> {
    private _onDebugSelectionChangeObserver;
    constructor(props: ITextureLinkLineComponentProps);
    componentWillMount(): void;
    componentWillUnmount(): void;
    debugTexture(): void;
    onLink(): void;
    render(): JSX.Element | null;
}
