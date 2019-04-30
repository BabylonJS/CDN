/// <reference types="react" />
import { PaneComponent, IPaneComponentProps } from "../paneComponent";
export declare class StatisticsTabComponent extends PaneComponent {
    private _sceneInstrumentation;
    private _engineInstrumentation;
    private _timerIntervalId;
    constructor(props: IPaneComponentProps);
    componentWillMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element | null;
}
