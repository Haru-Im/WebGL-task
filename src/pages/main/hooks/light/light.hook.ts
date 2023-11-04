import { DirectionalLight, Scene, Vector3 } from '@babylonjs/core';

export const useLight = () => {
  const initLight = (scene: Scene) => {
    const light = new DirectionalLight('light', new Vector3(0, -1, -2), scene);
    light.intensity = 2;
    light.position = new Vector3(0, 10, 0);

    return light;
  };

  return { initLight };
};
