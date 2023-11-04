import { IShadowLight, ShadowGenerator } from '@babylonjs/core';

export const useShadow = () => {
  const initShadow = (light: IShadowLight) => {
    const shadowGenerator = new ShadowGenerator(1024, light);
    shadowGenerator.useExponentialShadowMap = true;

    return shadowGenerator;
  };

  return { initShadow };
};
