import { useCallback, useEffect, useRef, useState } from 'react';
import { useCalculator } from '../../hooks';
import { operandKeys } from '@/constants';
import styles from './calculator-operand-cell.module.scss';

type Props = {
  operand: number;
};

export function CalculatorOperandCell(props: Props) {
  const { operand } = props;
  const { appendNumber } = useCalculator()!;
  const [active, setActive] = useState(false);
  const button = useRef<HTMLButtonElement>(null);

  const handleOperandClick = useCallback(() => {
    appendNumber(operand);
  }, [operand, appendNumber]);

  useEffect(() => {
    const keydownListener = (e: KeyboardEvent) => {
      if (operandKeys.includes(e.key)) {
        if (e.key === `${operand}`) {
          setActive(true);
          button.current?.focus();
          handleOperandClick();
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
  }, [active, operand, handleOperandClick]);

  const classNames = active ? [styles.cell, styles.cellActive] : [styles.cell];

  return (
    <div className={styles.cellWrapper}>
      <button
        ref={button}
        className={`noTapHighlighting ${classNames.join(' ')}`}
        onClick={handleOperandClick}
      >
        {operand}
      </button>
    </div>
  );
}
