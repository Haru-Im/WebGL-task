import { ArcRotateCamera, Scene, Vector3 } from '@babylonjs/core';

export const useCamera = () => {
  const initCamera = (scene: Scene, canvas: HTMLCanvasElement) => {
    const camera = new ArcRotateCamera('Camera', 2, 1.1, 4.5, Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
    camera.setTarget(Vector3.Zero());

    return camera;
  };

  return { initCamera };
};
