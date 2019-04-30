import * as React from "react";
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Scene, Observable } from "babylonjs";
import { PropertyChangedEvent } from "../propertyChangedEvent";
import { GlobalState } from "components/globalState";
export interface IPaneComponentProps {
    title: string;
    icon: IconDefinition;
    scene: Scene;
    selectedEntity?: any;
    onSelectionChangedObservable?: Observable<any>;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
    globalState: GlobalState;
}
export declare class PaneComponent extends React.Component<IPaneComponentProps, {
    tag: any;
}> {
    constructor(props: IPaneComponentProps);
    render(): JSX.Element | null;
}
