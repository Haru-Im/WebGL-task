import { Color4, Engine, Scene, SceneOptions } from '@babylonjs/core';

export const useScene = () => {
  const initScene = (engine: Engine, sceneOptions: SceneOptions) => {
    const scene = new Scene(engine, sceneOptions);
    scene.clearColor = new Color4(0, 0, 0, 0);

    return scene;
  };

  return { initScene };
};
