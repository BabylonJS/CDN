import { ViewerConfiguration } from './configuration';
import { Color3 } from 'babylonjs/Maths/math';
import { Scene } from 'babylonjs/scene';
export declare class ConfigurationContainer {
    configuration: ViewerConfiguration;
    viewerId: string;
    mainColor: Color3;
    reflectionColor: Color3;
    scene?: Scene;
}
