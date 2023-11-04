import { FC, useState } from 'react';
import { OptionButtonSvg, ToggleButtonSvg } from '../svgs';
type IButtonBoxComponentProps = {};

const BUTTON_TYPES = ['Light', 'Shadow', 'Arm', 'Toon Shader'];

export const ButtonBoxComponent: FC<IButtonBoxComponentProps> = ({}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handlePressToggleButton = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
    >
      <button onClick={handlePressToggleButton}>
        <ToggleButtonSvg title="+" />
      </button>

      {isOpen && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 48,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 28,
            paddingBottom: 28,
            width: 198,
            height: 344,
            background: 'var(--g1, linear-gradient(0deg, #974DFF 0%, #B8F 100%, #BA86FF 100%)',
            boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.10)',
          }}
        >
          {BUTTON_TYPES.map((e, i) => {
            return (
              <button key={i} style={{}}>
                <OptionButtonSvg title={e} />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
