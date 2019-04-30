/**
 * Class used to store 2D control sizes
 */
export declare class Measure {
    /** defines left coordinate */
    left: number;
    /** defines top coordinate  */
    top: number;
    /** defines width dimension  */
    width: number;
    /** defines height dimension */
    height: number;
    /**
     * Creates a new measure
     * @param left defines left coordinate
     * @param top defines top coordinate
     * @param width defines width dimension
     * @param height defines height dimension
     */
    constructor(
    /** defines left coordinate */
    left: number, 
    /** defines top coordinate  */
    top: number, 
    /** defines width dimension  */
    width: number, 
    /** defines height dimension */
    height: number);
    /**
     * Copy from another measure
     * @param other defines the other measure to copy from
     */
    copyFrom(other: Measure): void;
    /**
     * Copy from a group of 4 floats
     * @param left defines left coordinate
     * @param top defines top coordinate
     * @param width defines width dimension
     * @param height defines height dimension
     */
    copyFromFloats(left: number, top: number, width: number, height: number): void;
    /**
     * Check equality between this measure and another one
     * @param other defines the other measures
     * @returns true if both measures are equals
     */
    isEqualsTo(other: Measure): boolean;
    /**
     * Creates an empty measure
     * @returns a new measure
     */
    static Empty(): Measure;
}
