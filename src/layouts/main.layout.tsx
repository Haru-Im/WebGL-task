import { FC, ReactNode } from 'react';
import styles from './main.layout.module.css';

type IMainLayoutProps = {
  header: ReactNode;
  scene: ReactNode;
};

export const MainLayout: FC<IMainLayoutProps> = ({ header, scene }) => {
  return (
    <div className={styles.container}>
      {header}
      {scene}
    </div>
  );
};
