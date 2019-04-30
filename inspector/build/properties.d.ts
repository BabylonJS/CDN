import { Vector2, Vector3, Color3, Color4, Quaternion, Size, Texture, RenderTargetTexture, DynamicTexture, BaseTexture, CubeTexture, HDRCubeTexture, Sound, ArcRotateCamera, FreeCamera, Scene, TransformNode, AbstractMesh, Mesh, StandardMaterial, PBRMaterial, PhysicsImpostor, ImageProcessingConfiguration, ColorCurves } from "babylonjs";
export declare const PROPERTIES: {
    /** Format the given object :
     * If a format function exists, returns the result of this function.
     * If this function doesn't exists, return the object type instead
     */
    format: (obj: any) => any;
    'type_not_defined': {
        properties: any[];
        format: () => string;
    };
    'Vector2': {
        type: typeof Vector2;
        format: (vec: Vector2) => string;
    };
    'Vector3': {
        type: typeof Vector3;
        format: (vec: Vector3) => string;
    };
    'Color3': {
        type: typeof Color3;
        format: (color: Color3) => string;
        slider: {
            r: {
                min: number;
                max: number;
                step: number;
            };
            g: {
                min: number;
                max: number;
                step: number;
            };
            b: {
                min: number;
                max: number;
                step: number;
            };
        };
    };
    'Color4': {
        type: typeof Color4;
        format: (color: Color4) => string;
        slider: {
            r: {
                min: number;
                max: number;
                step: number;
            };
            g: {
                min: number;
                max: number;
                step: number;
            };
            b: {
                min: number;
                max: number;
                step: number;
            };
        };
    };
    'Quaternion': {
        type: typeof Quaternion;
    };
    'Size': {
        type: typeof Size;
        format: (size: Size) => string;
    };
    'Texture': {
        type: typeof Texture;
        format: (tex: Texture) => string;
    };
    'RenderTargetTexture': {
        type: typeof RenderTargetTexture;
    };
    'DynamicTexture': {
        type: typeof DynamicTexture;
    };
    'BaseTexture': {
        type: typeof BaseTexture;
    };
    'CubeTexture': {
        type: typeof CubeTexture;
    };
    'HDRCubeTexture': {
        type: typeof HDRCubeTexture;
    };
    'Sound': {
        type: typeof Sound;
    };
    'ArcRotateCamera': {
        type: typeof ArcRotateCamera;
        slider: {
            alpha: {
                min: number;
                max: number;
                step: number;
            };
            beta: {
                min: number;
                max: number;
                step: number;
            };
            fov: {
                min: number;
                max: number;
                step: number;
            };
        };
    };
    'FreeCamera': {
        type: typeof FreeCamera;
        slider: {
            fov: {
                min: number;
                max: number;
                step: number;
            };
        };
    };
    'Scene': {
        type: typeof Scene;
    };
    'TransformNode': {
        type: typeof TransformNode;
        format: (m: TransformNode) => string;
    };
    'AbstractMesh': {
        type: typeof AbstractMesh;
        format: (m: AbstractMesh) => string;
    };
    'Mesh': {
        type: typeof Mesh;
        format: (m: Mesh) => string;
        slider: {
            visibility: {
                min: number;
                max: number;
                step: number;
            };
        };
    };
    'StandardMaterial': {
        type: typeof StandardMaterial;
        format: (mat: StandardMaterial) => string;
        slider: {
            alpha: {
                min: number;
                max: number;
                step: number;
            };
        };
    };
    'PBRMaterial': {
        type: typeof PBRMaterial;
        slider: {
            alpha: {
                min: number;
                max: number;
                step: number;
            };
        };
    };
    'PhysicsImpostor': {
        type: typeof PhysicsImpostor;
    };
    'ImageProcessingConfiguration': {
        type: typeof ImageProcessingConfiguration;
    };
    'ColorCurves': {
        type: typeof ColorCurves;
    };
};
