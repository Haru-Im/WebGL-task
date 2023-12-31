import { FC } from 'react';

type IToggleButtonSvgProps = {
  title: string;
};

export const ToggleButtonSvg: FC<IToggleButtonSvgProps> = ({ title }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
      <path
        d="M0 5C0 2.23858 2.23858 0 5 0H30C32.7614 0 35 2.23858 35 5V30C35 32.7614 32.7614 35 30 35H5C2.23858 35 0 32.7614 0 30V5Z"
        fill="#7B756B"
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        fill="white"
        fontSize="24px"
        fontWeight={500}
      >
        {title}
      </text>
    </svg>
  );
};
