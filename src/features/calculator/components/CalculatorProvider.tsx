import { PropsWithChildren, useState } from 'react';
import { CalculatorContext } from '../CalculatorContext';

import { operators } from '../constants';
import { CalculatorState, Operator } from '../types';

export function CalculatorProvider(props: PropsWithChildren) {
  const [input, setInput] = useState('');

  const value: CalculatorState = {
    input: input,
    allClear() {
      setInput('');
    },
    backspace() {
      setInput((prev) => prev.substring(0, prev.length - 1));
    },
    appendOperator(operator) {
      if (!operators.includes(operator as Operator)) {
        return;
      }

      setInput((prev) => {
        const inputLen = input.length;
        const lastChar = input[inputLen - 1];

        if (operators.includes(lastChar as Operator)) {
          prev = prev.substring(0, inputLen - 1) + operator;
        } else {
          prev = prev + operator;
        }

        return prev;
      });
    },
    appendNumber(num) {
      num = Math.trunc(num);
      if (!(0 <= num && num <= 9)) {
        return;
      }

      setInput((prev) => `${prev}${num}`);
    },
    evaluate() {
      return 0;
    },
  };

  return (
    <CalculatorContext.Provider value={value}>
      {props.children}
    </CalculatorContext.Provider>
  );
}
