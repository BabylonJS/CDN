import * as React from "react";
import { Observable, AnimationGroup, Scene } from "babylonjs";
import { PropertyChangedEvent } from "../../../propertyChangedEvent";
import { LockObject } from "./lockObject";
interface IAnimationGroupGridComponentProps {
    animationGroup: AnimationGroup;
    scene: Scene;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}
export declare class AnimationGroupGridComponent extends React.Component<IAnimationGroupGridComponentProps, {
    playButtonText: string;
    currentFrame: number;
}> {
    private _onAnimationGroupPlayObserver;
    private _onAnimationGroupPauseObserver;
    private _onBeforeRenderObserver;
    constructor(props: IAnimationGroupGridComponentProps);
    disconnect(animationGroup: AnimationGroup): void;
    connect(animationGroup: AnimationGroup): void;
    updateCurrentFrame(animationGroup: AnimationGroup): void;
    shouldComponentUpdate(nextProps: IAnimationGroupGridComponentProps): boolean;
    componentWillMount(): void;
    componentWillUnmount(): void;
    playOrPause(): void;
    onCurrentFrameChange(value: number): void;
    render(): JSX.Element;
}
export {};
