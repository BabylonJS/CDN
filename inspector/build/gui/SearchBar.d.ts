import { DetailPanel } from "../details/DetailPanel";
import { PropertyTab } from "../tabs/PropertyTab";
import { BasicElement } from "./BasicElement";
/**
 * A search bar can be used to filter elements in the tree panel.
 * At each keypress on the input, the treepanel will be filtered.
 */
export declare class SearchBar extends BasicElement {
    private _propTab;
    private _inputElement;
    constructor(tab: PropertyTab);
    /** Delete all characters typped in the input element */
    reset(): void;
    update(): void;
}
export declare class SearchBarDetails extends BasicElement {
    private _detailTab;
    private _inputElement;
    constructor(tab: DetailPanel);
    /** Delete all characters typped in the input element */
    reset(): void;
    update(): void;
}
