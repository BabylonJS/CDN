import { BasicElement } from "../gui/BasicElement";
import { PropertyLine } from "./PropertyLine";
export interface SortDirection {
    [property: string]: number;
}
export declare class DetailPanel extends BasicElement {
    private _headerRow;
    private _detailRows;
    private _sortDirection;
    private _searchDetails;
    private _details;
    constructor(dr?: Array<PropertyLine>);
    details: Array<PropertyLine>;
    protected _build(): void;
    /** Updates the HTML of the detail panel */
    update(_items?: Array<PropertyLine>): void;
    /** Add the search bar for the details */
    private _addSearchBarDetails;
    /** Search an element by name  */
    searchByName(searchName: string): void;
    /** Add all lines in the html div. Does not sort them! */
    private _addDetails;
    private _addSearchDetails;
    /**
     * Sort the details row by comparing the given property of each row
     */
    private _sortDetails;
    /**
     * Removes all data in the detail panel but keep the header row
     */
    clean(): void;
    /**
     * Clean the rows only
     */
    cleanRow(): void;
    /** Overrides basicelement.dispose */
    dispose(): void;
    /**
     * Creates the header row : name, value, id
     */
    private _createHeaderRow;
}
