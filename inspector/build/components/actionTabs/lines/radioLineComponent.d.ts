import * as React from "react";
import { Observable } from "babylonjs";
interface IRadioButtonLineComponentProps {
    onSelectionChangedObservable: Observable<RadioButtonLineComponent>;
    label: string;
    isSelected: () => boolean;
    onSelect: () => void;
}
export declare class RadioButtonLineComponent extends React.Component<IRadioButtonLineComponentProps, {
    isSelected: boolean;
}> {
    private _onSelectionChangedObserver;
    constructor(props: IRadioButtonLineComponentProps);
    componentWillMount(): void;
    componentWillUnmount(): void;
    onChange(): void;
    render(): JSX.Element;
}
export {};
