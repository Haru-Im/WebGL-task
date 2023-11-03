import { FC } from 'react';
import { ButtonSvg } from './assets';
type IButtonBoxComponentProps = {};

const BUTTON_TYPES = ['Light', 'Shadow', 'Arm', 'Toon Shader'];

export const ButtonBoxComponent: FC<IButtonBoxComponentProps> = ({}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 50,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        position: 'fixed',
        top: 130,
        left: 7,
        width: 198,
        height: 344,
        background: 'var(--g1, linear-gradient(0deg, #974DFF 0%, #B8F 100%, #BA86FF 100%)',
        boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.10)',
      }}
    >
      {BUTTON_TYPES.map((e, i) => {
        return <ButtonSvg key={i} title={e} />;
      })}
    </div>
  );
};
