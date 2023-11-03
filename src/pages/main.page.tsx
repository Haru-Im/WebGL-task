import { FC } from 'react';
import { ButtonBoxComponent, SceneComponent } from './components';
import { Scene } from '@babylonjs/core';
type IMainPageProps = {};

export const MainPage: FC<IMainPageProps> = ({}) => {
  const onSceneReady = (scene: Scene) => {};

  return (
    <>
      <ButtonBoxComponent />
      <SceneComponent antialias onSceneReady={onSceneReady} id="my-canvas" />;
    </>
  );
};
