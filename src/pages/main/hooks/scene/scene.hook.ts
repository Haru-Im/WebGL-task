import { Color4, Engine, Scene } from '@babylonjs/core';
import { useEffect, useRef } from 'react';

export const useScene = () => {
  const sceneRef = useRef<Scene>(null);
  const initScene = (engine: Engine) => {
    const scene = new Scene(engine);
    scene.clearColor = new Color4(0, 0, 0, 0);

    sceneRef.current = scene;

    return scene;
  };

  useEffect(() => {
    const resize = () => {
      sceneRef.current.getEngine().resize();
    };

    if (window) {
      window.addEventListener('resize', resize);
    }

    return () => {
      sceneRef.current.getEngine().dispose();

      if (window) {
        window.removeEventListener('resize', resize);
      }
    };
  }, []);

  return { initScene, sceneRef };
};
