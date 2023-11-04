import { SceneLoader, Quaternion, Axis, Animation, Scene, ShadowGenerator } from '@babylonjs/core';

export const useModel = () => {
  const initModel = (scene: Scene, shadowGenerator: ShadowGenerator) => {
    const model = SceneLoader.ImportMeshAsync('', '/', 'sample.glb', scene);

    //animations
    model.then((res) => {
      const rightArmNode = scene.getTransformNodeByName('CC_Base_R_Upperarm');

      const startPosition = Quaternion.RotationAxis(Axis.Z, 0);
      const handUp = Quaternion.RotationAxis(Axis.Z, Math.PI / 4);
      const handUpAndDown = Quaternion.RotationAxis(Axis.Z, 0);
      const handDown = Quaternion.RotationAxis(Axis.Z, -Math.PI / 4);
      const handDownAndUp = Quaternion.RotationAxis(Axis.Z, 0);

      const animFrameRate = 30;
      const animTime = 1;
      const nbFrames = animTime * animFrameRate - 1;

      const animationRotation = new Animation(
        'animationRotation',
        'rotationQuaternion',
        animFrameRate,
        Animation.ANIMATIONTYPE_QUATERNION,
      );

      const rotationKeys = [];

      rotationKeys.push({
        frame: 0,
        value: startPosition,
      });
      rotationKeys.push({
        frame: Math.floor(nbFrames / 4),
        value: handUp,
      });
      rotationKeys.push({
        frame: Math.floor(nbFrames / 2),
        value: handUpAndDown,
      });
      rotationKeys.push({
        frame: Math.floor((nbFrames * 3) / 4),
        value: handDown,
      });
      rotationKeys.push({
        frame: nbFrames,
        value: handDownAndUp,
      });

      animationRotation.setKeys(rotationKeys);

      rightArmNode.animations.push(animationRotation);
      scene.beginAnimation(rightArmNode, 0, 30, false);

      res.meshes.forEach((mesh) => {
        mesh.position.y = -1;
        shadowGenerator.addShadowCaster(mesh);
      });
    });
  };

  return { initModel };
};
