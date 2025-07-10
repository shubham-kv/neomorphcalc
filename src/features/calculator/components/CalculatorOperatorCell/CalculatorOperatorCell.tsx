import { useCallback, useEffect, useRef, useState } from 'react';
import { useCalculator } from '../../hooks';
import { Operator } from '../../constants';
import { operatorKeys } from '@/constants';

import styles from './calculator-operator-cell.module.scss';

type Props = {
  ['data-col-start']?: string;
  innerHtml: React.ReactNode;
  operator?: Operator;
};

export function CalculatorOperatorCell(props: Props) {
  const { innerHtml, operator } = props;
  const { appendOperator, allClear, backspace, evaluate } = useCalculator()!;

  const [active, setActive] = useState(false);
  const button = useRef<HTMLButtonElement>(null);

  const handleOperatorClick = useCallback(() => {
    switch (operator) {
      case Operator.plus:
      case Operator.minus:
      case Operator.multiply:
      case Operator.divide:
      case Operator.dot: {
        appendOperator(operator);
        break;
      }
      case Operator.allClear: {
        allClear();
        break;
      }
      case Operator.backspace: {
        backspace();
        break;
      }
      case Operator.equal: {
        evaluate();
        break;
      }
    }
  }, [operator, appendOperator, allClear, backspace, evaluate]);

  useEffect(() => {
    const keydownListener = (e: KeyboardEvent) => {
      if (operatorKeys.includes(e.key)) {
        if (e.key === `${operator}`) {
          setActive(true);
          button.current?.focus();
          handleOperatorClick();
        } else {
          setActive(false);
          button.current?.blur();
        }
      }
    };

    const keyupListener = () => {
      setActive(false);
    };

    addEventListener('keydown', keydownListener);
    addEventListener('keyup', keyupListener);

    return () => {
      removeEventListener('keydown', keydownListener);
      removeEventListener('keyup', keyupListener);
    };
  }, [operator, handleOperatorClick]);

  const classNames = active ? [styles.cell, styles.cellActive] : [styles.cell];

  return (
    <div
      className={styles.cellWrapper}
      data-col-start={props['data-col-start']}
    >
      <button
        ref={button}
        className={`noTapHighlighting ${classNames.join(' ')}`}
        onClick={handleOperatorClick}
      >
        {innerHtml}
      </button>
    </div>
  );
}
