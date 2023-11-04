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
      <div id="float_buttons" style={{ position: 'absolute', top: 87, left: 7 }}>
        <ButtonBoxComponent />
        <ToggleInspectorButtonComponent scene={myScene} />
      </div>
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
    </>
  );
};
