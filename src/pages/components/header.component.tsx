import { FC } from 'react';
import { ToonitLogoSvg } from './assets';
type IHeaderComponentProps = {};

export const HeaderComponent: FC<IHeaderComponentProps> = ({}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: 70,
        paddingLeft: 50,
        backgroundColor: 'white',
        boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.05)',
        position: 'relative',
      }}
    >
      <ToonitLogoSvg />
    </div>
  );
};