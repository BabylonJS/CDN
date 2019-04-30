import * as React from "react";
import { Texture, Observable } from "babylonjs";
import { PropertyChangedEvent } from "../../../propertyChangedEvent";
interface ITexturePropertyGridComponentProps {
    texture: Texture;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export declare class TexturePropertyGridComponent extends React.Component<ITexturePropertyGridComponentProps> {
    constructor(props: ITexturePropertyGridComponentProps);
    render(): JSX.Element;
}
export {};
