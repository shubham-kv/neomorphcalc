import { useContext, useEffect } from 'react';
import { CalculatorContext } from '../CalculatorContext';

export function useCalculator() {
  const data = useContext(CalculatorContext);

  useEffect(() => {
    if (!data) {
      throw new Error("useCalculator hook must be used within it's provider");
    }
  }, [data]);

  return data;
}
