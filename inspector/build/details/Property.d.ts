/**
 * A property is a link between a data (string) and an object.
 */
export declare class Property {
    /** The property name */
    private _property;
    /** The obj this property refers to */
    private _obj;
    /** The obj parent  */
    private _parentObj;
    constructor(prop: string, obj: any, parentObj?: any);
    readonly name: string;
    value: any;
    readonly type: string;
    obj: any;
}
