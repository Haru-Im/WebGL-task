import { FC } from 'react';
import { HeaderComponent, SceneComponent } from './components';
import { Scene } from '@babylonjs/core';
import { MainLayout } from 'src/layouts';

type IMainPageProps = {};

export const MainPage: FC<IMainPageProps> = ({}) => {
  const onSceneReady = (scene: Scene) => {};

  return (
    <MainLayout
      header={<HeaderComponent />}
      scene={<SceneComponent antialias onSceneReady={onSceneReady} id="my-canvas" />}
    />
  );
};
