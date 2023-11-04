import { Scene } from '@babylonjs/core';
import { Inspector } from '@babylonjs/inspector';
import { useEffect, useState } from 'react';

export const useInspector = (scene: Scene) => {
  const [isInspectorOpened, setIsInspectorOpened] = useState<boolean>(true);

  const toggleInspector = () => {
    setIsInspectorOpened((prev) => !prev);
  };

  const openInspector = () => {
    Inspector.Show(scene, {
      overlay: true,
    });
  };

  const closeInspector = () => {
    Inspector.Hide();
  };

  useEffect(() => {
    if (!scene) return;
    isInspectorOpened ? closeInspector() : openInspector();
  }, [isInspectorOpened]);

  return { toggleInspector };
};
