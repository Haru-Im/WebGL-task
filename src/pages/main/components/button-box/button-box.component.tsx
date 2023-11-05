import { FC, useState } from 'react';
import { OptionButtonSvg, ToggleButtonSvg } from '../svgs';
import styles from './button-box.component.module.css';

type IButtonBoxComponentProps = {
  toggleLight: () => void;
  hideShadow: () => void;
  rightHandUpAnimation: () => void;
};

export const ButtonBoxComponent: FC<IButtonBoxComponentProps> = ({
  toggleLight,
  hideShadow,
  rightHandUpAnimation,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const BUTTON_TYPES = [
    { title: 'Light', onPress: toggleLight },
    { title: 'Shadow', onPress: hideShadow },
    { title: 'Arm', onPress: rightHandUpAnimation },
    { title: 'Toon Shader', onPress: toggleLight },
  ];

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
              <button key={i} onClick={e.onPress}>
                <OptionButtonSvg title={e.title} />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
