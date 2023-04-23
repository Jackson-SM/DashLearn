import { useEffect, useState } from 'react';

type WidthSizeProps = {
  width: number;
  height: number;
};

export const useWidthSize = () => {
  const [windowSize, setWindowSize] = useState<WidthSizeProps>({
    width: window.innerWidth,
    height: window.innerHeight,
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
