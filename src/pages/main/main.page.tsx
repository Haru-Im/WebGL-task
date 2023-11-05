import { FC } from 'react';
import { HeaderComponent, SceneComponent } from './components';
import { MainLayout } from 'src/layouts';

type IMainPageProps = {};

export const MainPage: FC<IMainPageProps> = ({}) => {
  return <MainLayout header={<HeaderComponent />} scene={<SceneComponent />} />;
};
