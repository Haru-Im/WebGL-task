import { Engine, Scene } from '@babylonjs/core';
import { BabylonjsProps } from 'babylonjs-hook';
import { useRef } from 'react';

type IEngineProps = {
  canvas: HTMLCanvasElement;
} & Pick<BabylonjsProps, 'antialias' | 'engineOptions' | 'adaptToDeviceRatio'>;

export const useEngine = () => {
  const engineRef = useRef<Engine>(null);
  const initEngine = ({ canvas }: IEngineProps) => {
    const engine = new Engine(canvas, true);
    engineRef.current = engine;
    return engine;
  };

  const renderScene = (sceneRef: React.MutableRefObject<Scene>) => {
    engineRef.current.runRenderLoop(() => {
      sceneRef.current.render();
    });
  };

  return { initEngine, engineRef, renderScene };
};
