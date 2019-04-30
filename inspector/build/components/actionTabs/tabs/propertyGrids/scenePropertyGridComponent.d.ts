import * as React from "react";
import { Observable, Scene, Vector3 } from "babylonjs";
import { PropertyChangedEvent } from "../../../propertyChangedEvent";
import { LockObject } from "./lockObject";
interface IScenePropertyGridComponentProps {
    scene: Scene;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
    onSelectionChangedObservable?: Observable<any>;
}
export declare class ScenePropertyGridComponent extends React.Component<IScenePropertyGridComponentProps> {
    private _storedEnvironmentTexture;
    private _renderingModeGroupObservable;
    constructor(props: IScenePropertyGridComponentProps);
    setRenderingModes(point: boolean, wireframe: boolean): void;
    switchIBL(): void;
    updateEnvironmentTexture(file: File): void;
    updateGravity(newValue: Vector3): void;
    updateTimeStep(newValue: number): void;
    render(): JSX.Element;
}
export {};
