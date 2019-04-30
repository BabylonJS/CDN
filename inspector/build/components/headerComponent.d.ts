import { Observable } from "babylonjs";
import * as React from "react";
export interface IHeaderComponentProps {
    title: string;
    handleBack?: boolean;
    noExpand?: boolean;
    noClose?: boolean;
    noCommands?: boolean;
    onPopup: () => void;
    onClose: () => void;
    onSelectionChangedObservable?: Observable<any>;
}
export declare class HeaderComponent extends React.Component<IHeaderComponentProps, {
    isBackVisible: boolean;
}> {
    private _backStack;
    private _onSelectionChangeObserver;
    constructor(props: IHeaderComponentProps);
    componentWillMount(): void;
    componentWillUnmount(): void;
    goBack(): void;
    renderLogo(): JSX.Element | null;
    render(): JSX.Element;
}
