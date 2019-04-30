import * as React from "react";
import { Scene } from "babylonjs";
import { GlobalState } from "../../../globalState";
interface IGLTFComponentProps {
    scene: Scene;
    globalState: GlobalState;
}
export declare class GLTFComponent extends React.Component<IGLTFComponentProps> {
    constructor(props: IGLTFComponentProps);
    openValidationDetails(): void;
    prepareText(singularForm: string, count: number): string;
    renderValidation(): JSX.Element;
    render(): JSX.Element;
}
export {};
