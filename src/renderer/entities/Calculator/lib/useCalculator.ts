import { useAppDispatch, useAppSelector } from 'shared';
import {
  EOperation,
  setIsWaiting,
  setOperation,
  setResult,
  setScreen,
} from '../slice';

export function useCalculator() {
  const dispatch = useAppDispatch();
  const screen = useAppSelector((state) => state.calculator.screen);
  const result = useAppSelector((state) => state.calculator.result);
  const binaryOperation = useAppSelector((state) => state.calculator.operation);
  const isWaiting = useAppSelector((state) => state.calculator.isWaiting);

  const clearScreen = () => {
    dispatch(setScreen(''));
  };

  const appendDigit = (digit: string) => {
    if (isWaiting) {
      dispatch(setScreen(digit));
      dispatch(setIsWaiting(false));
      return;
    }
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
    operation: EOperation | null,
  ) => {
    switch (operation) {
      case EOperation.Addition:
        return (isNaN(x) ? 0 : x) + y;
      case EOperation.Subtraction:
        return (isNaN(x) ? 0 : x) - y;
      case EOperation.Multiplication:
        return (isNaN(x) ? 1 : x) * y;
      case EOperation.Division:
        return (isNaN(x) ? 1 : x) / y;
      case null:
        return y;
      default:
        ((never: never) => {})(operation);
        return NaN;
    }
  };

  const executeBinaryOperation = (next?: EOperation) => {
    const value = Number(screen);
    if (isNaN(value)) {
      return;
    }
    const operationResult = binaryOperationReducer(
      result,
      value,
      binaryOperation,
    );
    dispatch(setResult(operationResult));
    dispatch(setScreen(operationResult.toString()));
    dispatch(setOperation(next ?? null));
    dispatch(setIsWaiting(true));
  };

  return {
    appendDigit,
    addComma,
    clearScreen,
    executeBinaryOperation,
  };
}
