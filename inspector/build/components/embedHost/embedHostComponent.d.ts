import * as React from "react";
import { Scene } from "babylonjs";
import { GlobalState } from "components/globalState";
interface IEmbedHostComponentProps {
    scene: Scene;
    globalState: GlobalState;
    popupMode: boolean;
    noClose?: boolean;
    noExpand?: boolean;
    onClose: () => void;
    onPopup: () => void;
}
export declare class EmbedHostComponent extends React.Component<IEmbedHostComponentProps> {
    private _once;
    constructor(props: IEmbedHostComponentProps);
    componentDidMount(): void;
    renderContent(): JSX.Element;
    render(): JSX.Element;
}
export {};
