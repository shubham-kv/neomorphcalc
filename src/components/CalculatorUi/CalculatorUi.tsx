import { Calculator, Operator } from '@features/calculator';
import styles from './calculator.module.scss';

export function CalculatorUi() {
  return (
    <Calculator.Provider>
      <div className={styles.calculator}>
        <div className={styles.outputWrapper}>
          <Calculator.Output />
        </div>

        <div className={styles.inputWrapper}>
          <Calculator.OperatorCell
            data-col-start='col-3'
            operator={Operator.allClear}
            innerHtml={'AC'}
          />
          <Calculator.OperatorCell
            operator={Operator.backspace}
            innerHtml={<img src={'/assets/left-arrow.svg'} />}
          />

          <Calculator.OperandCell operand={7} />
          <Calculator.OperandCell operand={8} />
          <Calculator.OperandCell operand={9} />
          <Calculator.OperatorCell
            operator={Operator.divide}
            innerHtml='&#x2215;'
          />

          <Calculator.OperandCell operand={4} />
          <Calculator.OperandCell operand={5} />
          <Calculator.OperandCell operand={6} />
          <Calculator.OperatorCell
            operator={Operator.multiply}
            innerHtml='&times;'
          />

          <Calculator.OperandCell operand={1} />
          <Calculator.OperandCell operand={2} />
          <Calculator.OperandCell operand={3} />
          <Calculator.OperatorCell operator={Operator.plus} innerHtml='+' />

          <Calculator.OperatorCell
            operator={Operator.dot}
            innerHtml='&#x2219;'
          />
          <Calculator.OperandCell operand={0} />
          <Calculator.OperatorCell operator={Operator.equal} innerHtml='=' />
          <Calculator.OperatorCell
            operator={Operator.minus}
            innerHtml='&minus;'
          />
        </div>
      </div>
    </Calculator.Provider>
  );
}
