import { EOperation, useCalculator } from 'entities/Calculator';
import { Button } from 'shared/ui';
import './Controls.css';

export function Controls() {
  const { appendDigit, clearScreen, addComma, executeBinaryOperation } =
    useCalculator();
  return (
    <div className="Controls">
      <div className="Controls--left">
        <Button type="additional">sin</Button>
        <Button type="additional">cos</Button>
        <Button type="additional">floor</Button>
        <Button type="additional">ceil</Button>
      </div>
      <div className="Controls--right">
        <div className="Controls--operations">
          <Button type="operation" onClick={clearScreen}>
            AC
          </Button>
          <Button type="operation">
            x<sup>2</sup>
          </Button>
          <Button type="operation">sqrt</Button>
        </div>
        <div className="Controls--functions">
          <Button
            type="function"
            onClick={() => executeBinaryOperation(EOperation.Division)}
          >
            ÷
          </Button>
          <Button
            type="function"
            onClick={() => executeBinaryOperation(EOperation.Multiplication)}
          >
            ×
          </Button>
          <Button
            type="function"
            onClick={() => executeBinaryOperation(EOperation.Subtraction)}
          >
            -
          </Button>
          <Button
            type="function"
            onClick={() => executeBinaryOperation(EOperation.Addition)}
          >
            +
          </Button>
          <Button type="function" onClick={() => executeBinaryOperation()}>
            =
          </Button>
        </div>
        <div className="Controls--main">
          {[7, 8, 9, 4, 5, 6, 1, 2, 3].map((digit) => (
            <Button onClick={() => appendDigit(digit.toString())}>
              {digit}
            </Button>
          ))}
          <Button onClick={() => appendDigit('0')} type="zero">
            0
          </Button>
          <Button onClick={addComma}>,</Button>
        </div>
      </div>
    </div>
  );
}
