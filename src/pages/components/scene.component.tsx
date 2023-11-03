import { useEffect, useRef, FC } from 'react';
import {
  ArcRotateCamera,
  Color4,
  DirectionalLight,
  Engine,
  MeshBuilder,
  Scene,
  SceneLoader,
  ShadowGenerator,
  Vector3,
} from '@babylonjs/core';
import { BabylonjsProps } from '../type';
import '@babylonjs/loaders/glTF';
import { Inspector } from '@babylonjs/inspector';

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

  useEffect(() => {
    const { current: canvas } = reactCanvas;

    if (!canvas) return;

    const engine = new Engine(canvas, antialias, engineOptions, adaptToDeviceRatio);
    const scene = new Scene(engine, sceneOptions);

    Inspector.Show(scene, {});

    scene.clearColor = new Color4(0, 0, 0, 0);

    const camera = new ArcRotateCamera('Camera', 2, 1.1, 4.5, Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
    camera.setTarget(Vector3.Zero());

    const light = new DirectionalLight('light', new Vector3(0, -1, -2), scene);
    light.intensity = 2;
    light.position = new Vector3(0, 10, 0);

    const shadowGenerator = new ShadowGenerator(1024, light);
    shadowGenerator.useExponentialShadowMap = true;

    const model = SceneLoader.ImportMeshAsync('', '/', 'sample.glb', scene);

    model.then((res) => {
      res.meshes.forEach((mesh) => {
        mesh.position.y = -1;
        shadowGenerator.addShadowCaster(mesh);
        console.log(123, mesh.material);
      });
    });

    const ground = MeshBuilder.CreateGround(
      'ground',
      { width: 10, height: 10, subdivisions: 30 },
      scene,
    );

    ground.position.y = -1;
    ground.receiveShadows = true;

    // const newMaterial = new StandardMaterial("newMaterial", scene);

    // ground.material.getActiveTextures('china');

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

  return (
    <canvas
      ref={reactCanvas}
      {...rest}
      style={{
        width: '100%',
        height: '100%',
        background: 'linear-gradient(30deg, rgba(178,153,141,1) 35%, rgba(134,125,132,1) 79%)',
        touchAction: 'none',
      }}
    />
  );
};
