import { Scene } from '@babylonjs/core';
import { Inspector } from '@babylonjs/inspector';
import { MutableRefObject } from 'react';

export const useInspector = (sceneRef: MutableRefObject<Scene>) => {
  const toggleInspector = () => {
    if (Inspector.IsVisible) {
      Inspector.Hide();
    } else {
      Inspector.Show(sceneRef.current, {
        overlay: true,
        embedMode: true,
      });
    }
  };

  return { toggleInspector };
};
