import { CalculatorProvider } from './CalculatorProvider';
import {
  CalculatorOperandCell,
  CalculatorOperatorCell,
  CalculatorOutput,
} from './components';

export * from './hooks';
export * from './types';
export * from './constants';

export const Calculator = Object.freeze({
  Provider: CalculatorProvider,
  OperandCell: CalculatorOperandCell,
  OperatorCell: CalculatorOperatorCell,
  Output: CalculatorOutput,
});
