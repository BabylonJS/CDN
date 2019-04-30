import { IImageProcessingConfiguration } from "./imageProcessingConfiguration";
export interface ISkyboxConfiguration {
    cubeTexture?: {
        noMipMap?: boolean;
        gammaSpace?: boolean;
        url?: string | Array<string>;
    };
    color?: {
        r: number;
        g: number;
        b: number;
    };
    pbr?: boolean;
    scale?: number;
    blur?: number;
    material?: {
        imageProcessingConfiguration?: IImageProcessingConfiguration;
        [propName: string]: any;
    };
    infiniteDistance?: boolean;
}
