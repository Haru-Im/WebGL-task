import { FC, useState } from 'react';
import { OptionButtonSvg, ToggleButtonSvg } from '../svgs';
import styles from './button-box.component.module.css';

type IButtonBoxComponentProps = {};

const BUTTON_TYPES = ['Light', 'Shadow', 'Arm', 'Toon Shader'];

export const ButtonBoxComponent: FC<IButtonBoxComponentProps> = ({}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handlePressToggleButton = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <button onClick={handlePressToggleButton}>
        <ToggleButtonSvg title="+" />
      </button>

      {isOpen && (
        <div className={styles.button_box}>
          {BUTTON_TYPES.map((e, i) => {
            return (
              <button key={i}>
                <OptionButtonSvg title={e} />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
