import { useState, useEffect } from 'react';
import { LayoutDimensions } from '../types';

export function useGraphDimensions(hasDetailPanel: boolean): LayoutDimensions {
  const [dimensions, setDimensions] = useState<LayoutDimensions>(() => ({
    width: hasDetailPanel ? window.innerWidth - 400 : window.innerWidth,
    height: window.innerHeight - 120,
    margin: { top: 60, right: 40, bottom: 40, left: 40 },
  }));

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: hasDetailPanel ? window.innerWidth - 400 : window.innerWidth,
        height: window.innerHeight - 120,
        margin: { top: 60, right: 40, bottom: 40, left: 40 },
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [hasDetailPanel]);

  return dimensions;
}
