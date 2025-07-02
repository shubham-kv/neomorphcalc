export type Operator = '+' | '-' | '*' | '/'

export type CalculatorState = {
  input: string;
  allClear: () => void;
  backspace: () => void;
  appendOperator: (operator: Operator) => void;
  appendNumber: (num: number) => void;
  evaluate: () => number;
};
