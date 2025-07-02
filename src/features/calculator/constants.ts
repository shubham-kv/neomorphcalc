export enum Operator {
  plus = '+',
  minus = '-',
  multiply = '*',
  divide = '/',

  dot = '.',
  equal = '=',
  allClear = 'allClear',
  backspace = 'Backspace',
}

export const operators: readonly Operator[] = Object.freeze([
  Operator.plus,
  Operator.minus,
  Operator.multiply,
  Operator.divide,
  Operator.dot
]);
