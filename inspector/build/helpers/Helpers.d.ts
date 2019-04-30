import { Nullable } from "babylonjs";
import { PropertyLine } from "../details/PropertyLine";
export declare class Helpers {
    /**
     * Returns the type of the given object. First
     * uses getClassName. If nothing is returned, used the type of the constructor
     */
    static GET_TYPE(obj: any): string;
    /**
     * Check if some properties are defined for the given type.
     */
    private static _CheckIfTypeExists;
    /**
     * Returns true if the user browser is edge.
     */
    static IsBrowserEdge(): boolean;
    /**
     * Returns true if the user browser is IE.
     */
    static IsBrowserIE(): boolean;
    /**
     * Returns the name of the type of the given object, where the name
     * is in PROPERTIES constant.
     * Returns 'Undefined' if no type exists for this object
     */
    private static _GetTypeFor;
    /**
     * Returns the name of a function (workaround to get object type for IE11)
     */
    private static _GetFnName;
    /** Send the event which name is given in parameter to the window */
    static SEND_EVENT(eventName: string): void;
    /** Returns the given number with 2 decimal number max if a decimal part exists */
    static Trunc(nb: number): number;
    /**
     * Useful function used to create a div
     */
    static CreateDiv(className?: Nullable<string>, parent?: HTMLElement, tooltip?: string): HTMLDivElement;
    /**
     * Useful function used to create a input
     */
    static CreateInput(className?: string, parent?: HTMLElement, tooltip?: string): HTMLInputElement;
    static CreateElement(element: string, className?: Nullable<string>, parent?: HTMLElement, tooltip?: string): HTMLElement;
    /**
     * Removes all children of the given div.
     */
    static CleanDiv(div: HTMLElement): void;
    /**
     * Returns the true value of the given CSS Attribute from the given element (in percentage or in pixel, as it was specified in the css)
     */
    static Css(elem: HTMLElement, cssAttribute: string): string;
    static LoadScript(): void;
    static IsSystemName(name: string): boolean;
    /**
     * Return an array of PropertyLine for an obj
     * @param obj
     */
    static GetAllLinesProperties(obj: any): Array<PropertyLine>;
    /**
     * Returns an array of string corresponding to tjhe list of properties of the object to be displayed
     * @param obj
     */
    static GetAllLinesPropertiesAsString(obj: any, dontTakeThis?: Array<string>): Array<string>;
    static Capitalize(str: string): string;
}
