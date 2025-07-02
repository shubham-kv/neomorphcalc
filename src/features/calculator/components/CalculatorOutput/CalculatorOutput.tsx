import { useEffect, useRef } from 'react';
import { useCalculator } from '../../hooks';
import styles from './calculator-output.module.scss';

export function CalculatorOutput() {
  const { expression, result } = useCalculator()!;
  const span = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (span.current?.scrollWidth) {
      span.current.scrollLeft = span.current.scrollWidth;
    }
  }, []);

  return (
    <div className={styles.cellWrapper}>
      <div className={styles.wrapper}>
        <span ref={span} className={styles.text}>
          {expression || result || ''}
        </span>
      </div>
    </div>
  );
}
