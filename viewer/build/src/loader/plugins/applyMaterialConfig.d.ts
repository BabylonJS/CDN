import { ViewerModel } from '../../model/viewerModel';
import { ILoaderPlugin } from './loaderPlugin';
import { ISceneLoaderPlugin, ISceneLoaderPluginAsync } from 'babylonjs/Loading/sceneLoader';
import { Material } from 'babylonjs/Materials/material';
/**
 * Force-apply material configuration right after a material was loaded.
 */
export declare class ApplyMaterialConfigPlugin implements ILoaderPlugin {
    private _model;
    onInit(loader: ISceneLoaderPlugin | ISceneLoaderPluginAsync, model: ViewerModel): void;
    onMaterialLoaded(material: Material): void;
}
