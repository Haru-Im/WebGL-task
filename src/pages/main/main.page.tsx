import { FC } from 'react';

import { MainLayout } from 'src/layouts';
import { HeaderComponent, SceneComponent } from './components';

type IMainPageProps = {};

export const MainPage: FC<IMainPageProps> = ({}) => {
  return <MainLayout header={<HeaderComponent />} scene={<SceneComponent />} />;
};
