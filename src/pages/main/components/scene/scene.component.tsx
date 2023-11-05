import { useEffect, useRef, FC, useState } from 'react';
import { BabylonjsProps } from './scene.type';
import '@babylonjs/loaders/glTF';
import {
  useCamera,
  useEngine,
  useGround,
  useLight,
  useModel,
  useScene,
  useShadow,
} from '../../hooks';
import { ButtonBoxComponent } from '../button-box';
import { ToggleInspectorButtonComponent } from '../toggle-inspector-button';
import { Scene } from '@babylonjs/core';
import styles from './scene.component.module.css';

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
  const reactCanvas = useRef<HTMLCanvasElement>(null);
  const [myScene, setMyScene] = useState<Scene>(null);

  const { initEngine } = useEngine();
  const { initScene } = useScene();
  const { initCamera } = useCamera();
  const { initLight } = useLight();
  const { initShadow } = useShadow();
  const { initModel } = useModel();
  const { initGround } = useGround();

  useEffect(() => {
    const { current: canvas } = reactCanvas;
    if (!canvas) return;

    const engine = initEngine({ canvas, antialias, engineOptions, adaptToDeviceRatio });
    const scene = initScene(engine, sceneOptions);
    setMyScene(scene);

    initCamera(scene, canvas);
    const light = initLight(scene);
    const shadowGenerator = initShadow(light);
    initModel(scene, shadowGenerator);
    initGround(scene);

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
    <>
      <div className={styles.float_buttons}>
        <ButtonBoxComponent />
        <ToggleInspectorButtonComponent scene={myScene} />
      </div>
      <canvas ref={reactCanvas} {...rest} className={styles.canvas} />
    </>
  );
};
