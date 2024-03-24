import { setScreen } from 'entities/Calculator';
import { useAppDispatch, useAppSelector } from 'shared';
import { EOperation, setOperation, setResult } from '../slice';

export function useCalculator() {
  const dispatch = useAppDispatch();
  const screen = useAppSelector((state) => state.calculator.screen);

  const clearScreen = () => {
    dispatch(setScreen(''));
  };

  const appendDigit = (digit: string) => {
    const updatedScreen = screen.concat(digit);
    dispatch(setScreen(updatedScreen));
  };

  const addComma = () => {
    if (screen.length === 0) {
      dispatch(setScreen('0,'));
    } else if (!screen.includes(',')) {
      dispatch(setScreen(`${screen},`));
    }
  };

  const binaryOperationReducer = (
    x: number,
    y: number,
    operation: EOperation,
  ) => {
    switch (operation) {
      case EOperation.Addition:
        return x + y;
      case EOperation.Subtraction:
        return x - y;
      case EOperation.Multiplication:
        return x * y;
      case EOperation.Division:
        return x / y;
      default:
        ((never: never) => {})(operation);
        return NaN;
    }
  };

  return {
    appendDigit,
    addComma,
    clearScreen,
  };
}
