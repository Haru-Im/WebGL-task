import { FC } from 'react';
import { SceneComponent } from './components';
import { Scene } from '@babylonjs/core';
type IMainPageProps = {};

export const MainPage: FC<IMainPageProps> = ({}) => {
  const onSceneReady = (scene: Scene) => {};

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex' }}>
      <SceneComponent antialias onSceneReady={onSceneReady} id="my-canvas" />
    </div>
  );
};
