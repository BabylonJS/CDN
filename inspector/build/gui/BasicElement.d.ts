/**
 * Represents a html div element.
 * The div is built when an instance of BasicElement is created.
 */
export declare abstract class BasicElement {
    protected _div: HTMLDivElement;
    constructor();
    /**
     * Returns the div element
     */
    toHtml(): HTMLDivElement;
    /**
     * Build the html element
     */
    protected _build(): void;
    abstract update(data?: any): void;
    /** Default dispose method if needed */
    dispose(): void;
}
