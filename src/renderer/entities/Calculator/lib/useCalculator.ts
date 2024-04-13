import { useAppDispatch, useAppSelector } from 'shared';
import {
  EBinaryOperation,
  EUnaryOperation,
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

  const unaryOperationReducer = (
    operand: number,
    operation: EUnaryOperation | null,
  ) => {
    const x = Number.isNaN(operand) ? 0 : operand;
    switch (operation) {
      case EUnaryOperation.SQRT:
        return Math.sqrt(x);
      case EUnaryOperation.SQUARE:
        return x * x;
      case EUnaryOperation.CEIL:
        return Math.ceil(x);
      case EUnaryOperation.FLOOR:
        return Math.floor(x);
      case EUnaryOperation.SIN:
        return Math.sin((x * Math.PI) / 180);
      case EUnaryOperation.COS:
        return Math.cos((x * Math.PI) / 180);
      case EUnaryOperation.LN:
        return Math.log(x);
      case null:
        return x;
      default:
        ((never: never) => {})(operation);
        return NaN;
    }
  };

  const executeUnaryOperation = (operation?: EUnaryOperation) => {
    const value = Number(screen);
    if (Number.isNaN(value)) {
      return;
    }
    const operationResult = unaryOperationReducer(value, operation ?? null);
    dispatch(setScreen(operationResult.toString()));
  };

  const binaryOperationReducer = (
    x: number,
    y: number,
    operation: EBinaryOperation | null,
  ) => {
    switch (operation) {
      case EBinaryOperation.Addition:
        return (Number.isNaN(x) ? 0 : x) + y;
      case EBinaryOperation.Subtraction:
        return (Number.isNaN(x) ? 0 : x) - y;
      case EBinaryOperation.Multiplication:
        return (Number.isNaN(x) ? 1 : x) * y;
      case EBinaryOperation.Division:
        return (Number.isNaN(x) ? 1 : x) / y;
      case null:
        return y;
      default:
        ((never: never) => {})(operation);
        return NaN;
    }
  };

  const executeBinaryOperation = (next?: EBinaryOperation) => {
    const value = Number(screen);
    if (Number.isNaN(value)) {
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
    executeUnaryOperation,
  };
}
