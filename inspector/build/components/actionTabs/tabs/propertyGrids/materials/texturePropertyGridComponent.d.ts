import * as React from "react";
import { BaseTexture, Observable } from "babylonjs";
import { PropertyChangedEvent } from "../../../../propertyChangedEvent";
import { LockObject } from "../lockObject";
import { GlobalState } from "components/globalState";
interface ITexturePropertyGridComponentProps {
    texture: BaseTexture;
    lockObject: LockObject;
    globalState: GlobalState;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export declare class TexturePropertyGridComponent extends React.Component<ITexturePropertyGridComponentProps> {
    private _adtInstrumentation;
    constructor(props: ITexturePropertyGridComponentProps);
    componentWillMount(): void;
    componentWillUnmount(): void;
    updateTexture(file: File): void;
    render(): JSX.Element;
}
export {};
