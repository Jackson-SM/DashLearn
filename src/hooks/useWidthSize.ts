import { useEffect, useState } from 'react';

type WidthSizeProps = {
  width: number;
  height: number;
};

export const useWidthSize = () => {
  const [windowSize, setWindowSize] = useState<WidthSizeProps>({
    width: 1920,
    height: 1080,
  });

  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    windowSize,
  };
};
