import { FC } from 'react';
import { ToonitLogoSvg } from '../svgs';
import styles from './header.component.module.css';

type IHeaderComponentProps = {};

export const HeaderComponent: FC<IHeaderComponentProps> = ({}) => {
  return (
    <div className={styles.container}>
      <ToonitLogoSvg />
    </div>
  );
};
