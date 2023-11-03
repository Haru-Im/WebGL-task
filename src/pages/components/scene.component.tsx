import { useEffect, useRef, FC } from 'react';
import {
  ArcRotateCamera,
  Engine,
  HemisphericLight,
  Scene,
  SceneLoader,
  Vector3,
} from '@babylonjs/core';
import { BabylonjsProps } from '../type';
import '@babylonjs/loaders/glTF';

type ISceneComponentProps = BabylonjsProps;

export const SceneComponent: FC<ISceneComponentProps> = ({
  antialias,
  engineOptions,
  adaptToDeviceRatio,
  sceneOptions,
  onRender,
  onSceneReady,
  id,
  ...rest
}) => {
  const reactCanvas = useRef(null);

  // set up basic engine and scene
  useEffect(() => {
    const { current: canvas } = reactCanvas;

    if (!canvas) return;

    const engine = new Engine(canvas, antialias, engineOptions, adaptToDeviceRatio);
    const scene = new Scene(engine, sceneOptions);

    SceneLoader.ImportMeshAsync('', '/', 'sample.glb', scene);

    // This creates and positions a free camera (non-mesh)
    const camera = new ArcRotateCamera('Camera', 2, 1, 20, Vector3.Zero(), scene);

    // This targets the camera to scene origin
    // camera.setTarget(Vector3.Random());

    // const canvas = scene.getEngine().getRenderingCanvas();

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    // Our built-in 'ground' shape.
    // MeshBuilder.CreateGround('ground', { width: 6, height: 6 }, scene);

    // const helper = scene.createDefaultEnvironment();
    // helper.setMainColor(Color3.Green());

    if (scene.isReady()) {
      onSceneReady(scene);
    } else {
      scene.onReadyObservable.addOnce((scene) => onSceneReady(scene));
    }

    engine.runRenderLoop(() => {
      if (typeof onRender === 'function') onRender(scene);
      scene.render();
    });

    const resize = () => {
      scene.getEngine().resize();
    };

    if (window) {
      window.addEventListener('resize', resize);
    }

    return () => {
      scene.getEngine().dispose();

      if (window) {
        window.removeEventListener('resize', resize);
      }
    };
  }, [antialias, engineOptions, adaptToDeviceRatio, sceneOptions, onRender, onSceneReady]);

  return <canvas ref={reactCanvas} {...rest} style={{ flex: 1 }} />;
};
