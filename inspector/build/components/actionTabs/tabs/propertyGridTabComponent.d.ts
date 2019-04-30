/// <reference types="react" />
import { PaneComponent, IPaneComponentProps } from "../paneComponent";
export declare class PropertyGridTabComponent extends PaneComponent {
    private _timerIntervalId;
    private _lockObject;
    constructor(props: IPaneComponentProps);
    timerRefresh(): void;
    componentWillMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element | null;
}
