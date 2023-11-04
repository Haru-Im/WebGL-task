import { FC } from 'react';
import { ToggleButtonSvg } from '../svgs';
import { useInspector } from '../../hooks';
import { Scene } from '@babylonjs/core';
type IToggleInspectorButtonComponentProps = {
  scene: Scene;
};

export const ToggleInspectorButtonComponent: FC<IToggleInspectorButtonComponentProps> = ({
  scene,
}) => {
  const { toggleInspector } = useInspector(scene);

  return (
    <button onClick={toggleInspector}>
      <ToggleButtonSvg title="T" />
    </button>
  );
};
