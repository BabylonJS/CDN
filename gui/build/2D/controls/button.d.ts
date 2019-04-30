import { Rectangle } from "./rectangle";
import { Control } from "./control";
import { TextBlock } from "./textBlock";
import { Image } from "./image";
import { Vector2, Nullable } from "babylonjs";
/**
 * Class used to create 2D buttons
 */
export declare class Button extends Rectangle {
    name?: string | undefined;
    /**
     * Function called to generate a pointer enter animation
     */
    pointerEnterAnimation: () => void;
    /**
     * Function called to generate a pointer out animation
     */
    pointerOutAnimation: () => void;
    /**
     * Function called to generate a pointer down animation
     */
    pointerDownAnimation: () => void;
    /**
     * Function called to generate a pointer up animation
     */
    pointerUpAnimation: () => void;
    private _image;
    /**
     * Returns the image part of the button (if any)
     */
    readonly image: Nullable<Image>;
    private _textBlock;
    /**
     * Returns the image part of the button (if any)
     */
    readonly textBlock: Nullable<TextBlock>;
    /**
     * Creates a new Button
     * @param name defines the name of the button
     */
    constructor(name?: string | undefined);
    protected _getTypeName(): string;
    /** @hidden */
    _processPicking(x: number, y: number, type: number, pointerId: number, buttonIndex: number): boolean;
    /** @hidden */
    _onPointerEnter(target: Control): boolean;
    /** @hidden */
    _onPointerOut(target: Control): void;
    /** @hidden */
    _onPointerDown(target: Control, coordinates: Vector2, pointerId: number, buttonIndex: number): boolean;
    /** @hidden */
    _onPointerUp(target: Control, coordinates: Vector2, pointerId: number, buttonIndex: number, notifyClick: boolean): void;
    /**
     * Creates a new button made with an image and a text
     * @param name defines the name of the button
     * @param text defines the text of the button
     * @param imageUrl defines the url of the image
     * @returns a new Button
     */
    static CreateImageButton(name: string, text: string, imageUrl: string): Button;
    /**
     * Creates a new button made with an image
     * @param name defines the name of the button
     * @param imageUrl defines the url of the image
     * @returns a new Button
     */
    static CreateImageOnlyButton(name: string, imageUrl: string): Button;
    /**
     * Creates a new button made with a text
     * @param name defines the name of the button
     * @param text defines the text of the button
     * @returns a new Button
     */
    static CreateSimpleButton(name: string, text: string): Button;
    /**
     * Creates a new button made with an image and a centered text
     * @param name defines the name of the button
     * @param text defines the text of the button
     * @param imageUrl defines the url of the image
     * @returns a new Button
     */
    static CreateImageWithCenterTextButton(name: string, text: string, imageUrl: string): Button;
}
