import { SceneLoader, Scene, ShadowGenerator } from '@babylonjs/core';

export const useModel = () => {
  const initModel = (scene: Scene, shadowGenerator: ShadowGenerator) => {
    const model = SceneLoader.ImportMeshAsync('', '/', 'sample.glb', scene);

    //make shadow
    model.then((res) => {
      res.meshes.forEach((mesh) => {
        mesh.position.y = -1;
        shadowGenerator.addShadowCaster(mesh);
      });
    });
  };

  return { initModel };
};
