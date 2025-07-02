import { Operator } from "./constants";

export type CalculatorMode = 'input' | 'output'

export type CalculatorState = {
  mode: CalculatorMode
  input: string;
  output: number | undefined;
  allClear: () => void;
  backspace: () => void;
  appendOperator: (operator: Operator) => void;
  appendNumber: (num: number) => void;
  evaluate: () => number;
};
