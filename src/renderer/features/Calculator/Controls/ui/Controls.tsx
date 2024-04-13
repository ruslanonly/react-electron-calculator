import { Button } from 'shared/ui';
import './Controls.css';
import {
  EBinaryOperation,
  EUnaryOperation,
  useCalculator,
} from 'entities/Calculator';

export function Controls() {
  const {
    appendDigit,
    clearScreen,
    addComma,
    executeBinaryOperation,
    executeUnaryOperation,
  } = useCalculator();
  return (
    <div className="Controls">
      <div className="Controls--left">
        <Button
          type="additional"
          onClick={() => executeUnaryOperation(EUnaryOperation.LOG10)}
        >
          log10
        </Button>
        <Button
          type="additional"
          onClick={() => executeUnaryOperation(EUnaryOperation.LN)}
        >
          ln
        </Button>
        <Button
          type="additional"
          onClick={() => executeUnaryOperation(EUnaryOperation.TenTimesX)}
        >
          10<sup>x</sup>
        </Button>
        <Button
          type="additional"
          onClick={() => executeUnaryOperation(EUnaryOperation.SIN)}
        >
          sin
        </Button>
        <Button
          type="additional"
          onClick={() => executeUnaryOperation(EUnaryOperation.COS)}
        >
          cos
        </Button>
        <Button
          type="additional"
          onClick={() => executeUnaryOperation(EUnaryOperation.FLOOR)}
        >
          floor
        </Button>
        <Button
          type="additional"
          onClick={() => executeUnaryOperation(EUnaryOperation.CEIL)}
        >
          ceil
        </Button>
      </div>
      <div className="Controls--right">
        <div className="Controls--operations">
          <Button type="operation" onClick={clearScreen}>
            AC
          </Button>
          <Button
            type="operation"
            onClick={() => executeUnaryOperation(EUnaryOperation.SQUARE)}
          >
            x<sup>2</sup>
          </Button>
          <Button
            type="operation"
            onClick={() => executeUnaryOperation(EUnaryOperation.SQRT)}
          >
            sqrt
          </Button>
        </div>
        <div className="Controls--functions">
          <Button
            type="function"
            onClick={() => executeBinaryOperation(EBinaryOperation.Division)}
          >
            ÷
          </Button>
          <Button
            type="function"
            onClick={() =>
              executeBinaryOperation(EBinaryOperation.Multiplication)
            }
          >
            ×
          </Button>
          <Button
            type="function"
            onClick={() => executeBinaryOperation(EBinaryOperation.Subtraction)}
          >
            -
          </Button>
          <Button
            type="function"
            onClick={() => executeBinaryOperation(EBinaryOperation.Addition)}
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
          <Button onClick={addComma}>.</Button>
        </div>
      </div>
    </div>
  );
}
