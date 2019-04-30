import { Observable, ISceneLoaderPlugin, ISceneLoaderPluginAsync, Observer, Nullable, Scene } from "babylonjs";
import { PropertyChangedEvent } from "./propertyChangedEvent";
import { IGLTFLoaderExtension, GLTFFileLoader } from "babylonjs-loaders";
export declare class GlobalState {
    onSelectionChangedObservable: Observable<string>;
    onPropertyChangedObservable: Observable<PropertyChangedEvent>;
    onInspectorClosedObservable: Observable<Scene>;
    onTabChangedObservable: Observable<number>;
    onPluginActivatedObserver: Nullable<Observer<ISceneLoaderPlugin | ISceneLoaderPluginAsync>>;
    validationResults: IGLTFValidationResults;
    onValidationResultsUpdatedObservable: Observable<IGLTFValidationResults>;
    onExtensionLoadedObservable: Observable<IGLTFLoaderExtension>;
    glTFLoaderExtensionDefaults: {
        [name: string]: {
            [key: string]: any;
        };
    };
    glTFLoaderDefaults: {
        [key: string]: any;
    };
    blockMutationUpdates: boolean;
    prepareGLTFPlugin(loader: GLTFFileLoader): void;
}
