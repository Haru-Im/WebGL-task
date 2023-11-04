import { FC, ReactNode } from 'react';
type IMainLayoutProps = {
  header: ReactNode;
  scene: ReactNode;
};

export const MainLayout: FC<IMainLayoutProps> = ({ header, scene }) => {
  return (
    <div style={{ height: '100', overflow: 'hidden' }}>
      {header}
      {scene}
    </div>
  );
};
