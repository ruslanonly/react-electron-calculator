import { setScreen } from 'entities/Calculator';
import { useAppDispatch, useAppSelector } from 'shared';

export function useAppendValueToScreen() {
  const dispatch = useAppDispatch();
  const screen = useAppSelector((state) => state.calculator.screen);

  function appendValueToScreen(value: string) {
    const updatedScreen = screen.concat(value);
    dispatch(setScreen(updatedScreen));
  }

  return appendValueToScreen;
}
