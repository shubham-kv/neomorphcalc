import { PropsWithChildren, useCallback, useState } from 'react';
import { CalculatorContext } from './CalculatorContext';

import { Operator, operators } from './constants';
import { CalculatorMode, CalculatorState } from './types';
import { evaluateExpression } from '@/lib';

export function CalculatorProvider(props: PropsWithChildren) {
  const [mode, setMode] = useState<CalculatorMode>('input');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState(0);

  const switchToInputMode = useCallback(() => {
    if (mode === 'output') {
      if (Number.isFinite(output) && !Number.isNaN(output)) {
        setInput(String(output));
      } else {
        setInput('');
      }
      setMode('input');
    }
  }, [mode, output]);

  const value: CalculatorState = {
    mode: mode,
    input: input,
    output: output,
    allClear() {
      setMode('input');
      setInput('');
      setOutput(0);
    },
    backspace() {
      switchToInputMode();
      setInput((prev) => prev.substring(0, prev.length - 1));
    },
    appendOperator(operator) {
      switchToInputMode();

      if (!operators.includes(operator)) {
        return;
      }

      setInput((prev) => {
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
      switchToInputMode();

      num = Math.trunc(num);
      if (!(0 <= num && num <= 9)) {
        return;
      }

      setInput((prev) => `${prev}${num}`);
    },
    evaluate() {
      setMode('output');
      const result = evaluateExpression(input);
      setOutput(result ?? 0);
      setInput('');
    },
  };

  return (
    <CalculatorContext.Provider value={value}>
      {props.children}
    </CalculatorContext.Provider>
  );
}
