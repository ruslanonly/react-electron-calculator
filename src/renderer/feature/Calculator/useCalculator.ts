import { setScreen } from 'entities/Calculator';
import { useAppDispatch, useAppSelector } from 'shared';

export function useCalculator() {
  const dispatch = useAppDispatch();
  const screen = useAppSelector((state) => state.calculator.screen);

  function appendDigitToScreen(digit: string) {
    const updatedScreen = screen.concat(digit);
    dispatch(setScreen(updatedScreen));
  }

  return {
    appendDigitToScreen,
  };
}
