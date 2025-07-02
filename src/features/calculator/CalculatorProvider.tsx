import { PropsWithChildren, useState } from 'react';
import { CalculatorContext } from './CalculatorContext';

import { Operator, operators } from './constants';
import { CalculatorState } from './types';
import { evaluateExpression } from '@/lib';

export function CalculatorProvider(props: PropsWithChildren) {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState(0);

  const value: CalculatorState = {
    expression: expression,
    result: result,
    allClear() {
      setExpression('');
      setResult(0);
    },
    backspace() {
      setExpression((prev) => prev.substring(0, prev.length - 1));
    },
    appendOperator(operator) {
      if (!operators.includes(operator)) {
        return;
      }

      setExpression((prev) => {
        const inputLen = prev.length;
        const lastChar = prev[inputLen - 1];

        if (operator === Operator.dot) {
          if (lastChar !== Operator.dot) {
            prev = prev + operator;
          }
        } else {
          if (lastChar !== Operator.dot && operators.includes(lastChar as Operator)) {
            prev = prev.substring(0, inputLen - 1) + operator;
          } else {
            prev = prev + operator;
          }
        }

        return prev;
      });
    },
    appendNumber(num) {
      num = Math.trunc(num);
      if (!(0 <= num && num <= 9)) {
        return;
      }

      setExpression((prev) => `${prev}${num}`);
    },
    evaluate() {
      const result = evaluateExpression(expression);
      setResult(result ?? 0);
      setExpression('');
      return 0;
    },
  };

  return (
    <CalculatorContext.Provider value={value}>
      {props.children}
    </CalculatorContext.Provider>
  );
}
