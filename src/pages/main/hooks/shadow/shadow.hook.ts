import { IShadowLight, Scene, ShadowGenerator } from '@babylonjs/core';
import { MutableRefObject, useRef } from 'react';

export const useShadow = (sceneRef: MutableRefObject<Scene>) => {
  const shadowRef = useRef<ShadowGenerator>(null);
  const initShadow = (light: IShadowLight) => {
    const shadowGenerator = new ShadowGenerator(1024, light);
    shadowGenerator.useExponentialShadowMap = true;

    shadowRef.current = shadowGenerator;

    return shadowGenerator;
  };

  const hideShadow = () => {
    sceneRef.current.shadowsEnabled = !sceneRef.current.shadowsEnabled;
  };

  return { initShadow, shadowRef, hideShadow };
};
