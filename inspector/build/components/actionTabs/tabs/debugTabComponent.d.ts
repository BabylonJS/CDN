/// <reference types="react" />
import { PaneComponent, IPaneComponentProps } from "../paneComponent";
export declare class DebugTabComponent extends PaneComponent {
    private _skeletonViewersEnabled;
    private _physicsViewersEnabled;
    private _skeletonViewers;
    constructor(props: IPaneComponentProps);
    componentWillMount(): void;
    componentWillUnmount(): void;
    switchSkeletonViewers(): void;
    switchPhysicsViewers(): void;
    render(): JSX.Element | null;
}
