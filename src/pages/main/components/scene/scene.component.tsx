import { useRef, FC, useEffect, Fragment } from 'react';

import '@babylonjs/loaders/glTF';
import {
  useAnimation,
  useCamera,
  useEngine,
  useGround,
  useInspector,
  useLight,
  useModel,
  useScene,
  useShadow,
} from '../../hooks';
import { ButtonBoxComponent } from '../button-box';
import { ToggleInspectorButtonComponent } from '../toggle-inspector-button';
import styles from './scene.component.module.css';

type ISceneComponentProps = {};

export const SceneComponent: FC<ISceneComponentProps> = ({}) => {
  const reactCanvas = useRef<HTMLCanvasElement>(null);

  const { initEngine, engineRef, renderScene } = useEngine();
  const { initScene, sceneRef } = useScene();
  const { initCamera } = useCamera();
  const { initLight, toggleLight, lightRef } = useLight();
  const { initShadow, shadowRef, hideShadow } = useShadow(sceneRef);
  const { initModel } = useModel();
  const { initGround } = useGround();
  const { rightHandUpAnimation } = useAnimation(sceneRef);
  const { toggleInspector } = useInspector(sceneRef);

  useEffect(() => {
    const { current: canvas } = reactCanvas;

    if (!canvas) return;

    initEngine({ canvas });
    initScene(engineRef.current);
    initCamera(sceneRef.current, canvas);
    initLight(sceneRef.current);
    initShadow(lightRef.current);
    initModel(sceneRef.current, shadowRef.current);
    initGround(sceneRef.current);

    renderScene(sceneRef);
  }, []);

  return (
    <Fragment>
      <div className={styles.float_buttons}>
        <ButtonBoxComponent
          toggleLight={toggleLight}
          hideShadow={hideShadow}
          rightHandUpAnimation={rightHandUpAnimation}
        />
        <ToggleInspectorButtonComponent toggleInspector={toggleInspector} />
      </div>
      <canvas ref={reactCanvas} className={styles.canvas} />
    </Fragment>
  );
};
