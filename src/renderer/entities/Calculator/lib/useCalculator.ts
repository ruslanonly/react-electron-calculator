import { useAppDispatch, useAppSelector } from 'shared';
import {
  EBinaryOperation,
  EUnaryOperation,
  setIsWaiting,
  setOperation,
  setResult,
  setScreen,
} from '../slice';
import { binaryOperationReducer } from './binaryOperationReducer';
import { unaryOperationReducer } from './unaryOperationReducer';

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
      dispatch(setScreen('0.'));
    } else if (!screen.includes('.')) {
      dispatch(setScreen(`${screen}.`));
    }
  };

  const executeUnaryOperation = (operation?: EUnaryOperation) => {
    const value = parseFloat(screen);
    console.log(value);
    if (Number.isNaN(value)) {
      return;
    }
    const operationResult = unaryOperationReducer(value, operation ?? null);
    dispatch(setScreen(operationResult.toString()));
  };

  const executeBinaryOperation = (next?: EBinaryOperation) => {
    const value = parseFloat(screen);
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
