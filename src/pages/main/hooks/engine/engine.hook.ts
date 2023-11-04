import { Engine } from '@babylonjs/core';
import { BabylonjsProps } from 'babylonjs-hook';

type IEngineProps = {
  canvas: HTMLCanvasElement;
} & Pick<BabylonjsProps, 'antialias' | 'engineOptions' | 'adaptToDeviceRatio'>;

export const useEngine = () => {
  const initEngine = ({ canvas, antialias, engineOptions, adaptToDeviceRatio }: IEngineProps) => {
    const engine = new Engine(canvas, antialias, engineOptions, adaptToDeviceRatio);

    return engine;
  };

  return { initEngine };
};
