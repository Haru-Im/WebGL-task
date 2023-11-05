import { FC } from 'react';
import { ToggleButtonSvg } from '../svgs';
type IToggleInspectorButtonComponentProps = {
  toggleInspector: () => void;
};

export const ToggleInspectorButtonComponent: FC<IToggleInspectorButtonComponentProps> = ({
  toggleInspector,
}) => {
  return (
    <button onClick={toggleInspector}>
      <ToggleButtonSvg title="🔍" />
    </button>
  );
};
