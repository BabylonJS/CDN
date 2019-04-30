import { Nullable } from "babylonjs";
import { Property } from "./Property";
export declare class PropertyFormatter {
    /**
     * Format the value of the given property of the given object.
     */
    static format(obj: any, prop: string): string;
}
/**
 * A property line represents a line in the detail panel. This line is composed of :
 * - a name (the property name)
 * - a value if this property is of a type 'simple' : string, number, boolean, color, texture
 * - the type of the value if this property is of a complex type (Vector2, Size, ...)
 * - a ID if defined (otherwise an empty string is displayed)
 * The original object is sent to the value object who will update it at will.
 *
 * A property line can contain OTHER property line objects in the case of a complex type.
 * If this instance has no link to other instances, its type is ALWAYS a simple one (see above).
 *
 */
export declare class PropertyLine {
    private _property;
    private _div;
    private _valueDiv;
    private _children;
    private static _SIMPLE_TYPE;
    private static _MARGIN_LEFT;
    private _level;
    /** The list of viewer element displayed at the end of the line (color, texture...) */
    private _elements;
    /** The property parent of this one. Used to update the value of this property and to retrieve the correct object */
    private _parent;
    /** The input element to display if this property is 'simple' in order to update it */
    private _input;
    /** Display input handler (stored to be removed afterwards) */
    private _displayInputHandler;
    /** Handler used to validate the input by pressing 'enter' */
    private _validateInputHandler;
    /** Handler used to validate the input by pressing 'esc' */
    private _escapeInputHandler;
    /** Handler used on focus out */
    private _focusOutInputHandler;
    /** Handler used to get mouse position */
    private _onMouseDownHandler;
    private _onMouseDragHandler;
    private _onMouseUpHandler;
    private _textValue;
    /** Save previous Y mouse position */
    private _prevY;
    /**Save value while slider is on */
    private _preValue;
    constructor(prop: Property, parent?: Nullable<PropertyLine>, level?: number);
    /**
     * Init the input element and al its handler :
     * - a click in the window remove the input and restore the old property value
     * - enters updates the property
     */
    private _initInput;
    /**
     * On enter : validates the new value and removes the input
     * On escape : removes the input
     */
    private _validateInput;
    validateInput(value: any, forceupdate?: boolean): void;
    /**
     * On escape : removes the input
     */
    private _escapeInput;
    /** Removes the input without validating the new value */
    private _removeInputWithoutValidating;
    /** Replaces the default display with an input */
    private _displayInput;
    /** Retrieve the correct object from its parent.
     * If no parent exists, returns the property value.
     * This method is used at each update in case the property object is removed from the original object
     * (example : mesh.position = new Vector3 ; the original vector3 object is deleted from the mesh).
    */
    updateObject(): any;
    readonly name: string;
    readonly value: any;
    readonly type: string;
    /**
     * Creates elements that wil be displayed on a property line, depending on the
     * type of the property.
     */
    private _createElements;
    private _displayValueContent;
    /** Delete properly this property line.
     * Removes itself from the scheduler.
     * Dispose all viewer element (color, texture...)
     */
    dispose(): void;
    /** Updates the content of _valueDiv with the value of the property,
     * and all HTML element correpsonding to this type.
     * Elements are updated as well
     */
    private _updateValue;
    /**
     * Update the property division with the new property value.
     * If this property is complex, update its child, otherwise update its text content
     */
    update(): void;
    /**
     * Returns true if the type of this property is simple, false otherwise.
     * Returns true if the value is null
     */
    private _isSimple;
    toHtml(): HTMLElement;
    closeDetails(): void;
    /**
     * Add sub properties in case of a complex type
     */
    private _addDetails;
    /**
     * Refresh mouse position on y axis
     * @param e
     */
    private _onMouseDrag;
    /**
     * Save new value from slider
     * @param e
     */
    private _onMouseUp;
    /**
     * Start record mouse position
     * @param e
     */
    private _onMouseDown;
    /**
     * Create input entry
     */
    private _checkboxInput;
    private _rangeInput;
    private _rangeHandler;
    private _isSliderType;
    private _getSliderProperty;
}
