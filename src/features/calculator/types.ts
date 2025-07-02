import { Operator } from "./constants";

export type CalculatorState = {
  expression: string;
  result: number | undefined;
  allClear: () => void;
  backspace: () => void;
  appendOperator: (operator: Operator) => void;
  appendNumber: (num: number) => void;
  evaluate: () => number;
};
