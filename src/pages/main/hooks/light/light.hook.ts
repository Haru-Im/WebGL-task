import { DirectionalLight, Scene, Vector3 } from '@babylonjs/core';
import { useRef } from 'react';

export const useLight = () => {
  const lightRef = useRef<DirectionalLight>(null);
  const initLight = (scene: Scene) => {
    const light = new DirectionalLight('light', new Vector3(0, -1, -2), scene);
    light.intensity = 2;
    light.position = new Vector3(0, 10, 0);
    lightRef.current = light;

    return light;
  };

  const toggleLight = () => {
    if (lightRef.current) {
      if (lightRef.current.intensity > 0) {
        lightRef.current.intensity = 0;
      } else {
        lightRef.current.intensity = 2;
      }
    }
  };

  return { initLight, lightRef, toggleLight };
};
