import { setScreen } from 'entities/Calculator';
import { useAppDispatch, useAppSelector } from 'shared';

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

  return {
    appendDigit,
    addComma,
    clearScreen,
  };
}
