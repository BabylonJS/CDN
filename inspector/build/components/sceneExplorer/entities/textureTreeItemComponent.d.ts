import { Texture, IExplorerExtensibilityGroup } from "babylonjs";
import * as React from 'react';
interface ITextureTreeItemComponentProps {
    texture: Texture;
    extensibilityGroups?: IExplorerExtensibilityGroup[];
    onClick: () => void;
}
export declare class TextureTreeItemComponent extends React.Component<ITextureTreeItemComponentProps> {
    constructor(props: ITextureTreeItemComponentProps);
    render(): JSX.Element;
}
export {};
