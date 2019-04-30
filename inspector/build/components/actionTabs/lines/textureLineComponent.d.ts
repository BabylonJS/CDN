import * as React from "react";
import { BaseTexture } from "babylonjs";
import { GlobalState } from "components/globalState";
interface ITextureLineComponentProps {
    texture: BaseTexture;
    width: number;
    height: number;
    globalState: GlobalState;
}
export declare class TextureLineComponent extends React.Component<ITextureLineComponentProps, {
    displayRed: boolean;
    displayGreen: boolean;
    displayBlue: boolean;
    displayAlpha: boolean;
    face: number;
}> {
    constructor(props: ITextureLineComponentProps);
    shouldComponentUpdate(nextProps: ITextureLineComponentProps, nextState: {
        displayRed: boolean;
        displayGreen: boolean;
        displayBlue: boolean;
        displayAlpha: boolean;
        face: number;
    }): boolean;
    componentDidMount(): void;
    componentDidUpdate(): void;
    updatePreview(): void;
    render(): JSX.Element;
}
export {};
