import { CalculatorUi } from '@/components';
import styles from './app.module.scss';

export function App() {
  return (
    <div className={styles.app}>
      <h2 style={{color: 'var(--primary-color)'}}>
        Neomorphcalc
      </h2>
      <CalculatorUi />
    </div>
  );
}
