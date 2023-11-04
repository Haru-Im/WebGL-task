import { MeshBuilder, Scene } from '@babylonjs/core';

export const useGround = () => {
  const initGround = (scene: Scene) => {
    const ground = MeshBuilder.CreateGround(
      'ground',
      { width: 10, height: 10, subdivisions: 30 },
      scene,
    );

    ground.position.y = -1;
    ground.receiveShadows = true;
  };

  return { initGround };
};
