import { useAppSelector } from 'shared';
import { Textfit } from 'react-textfit';
import './Screen.css';

export function Screen() {
  const screen = useAppSelector((state) => state.calculator.screen);
  return (
    <div className="Screen">
      <Textfit mode="single" forceSingleModeWidth max={60} throttle={10}>
        {screen}
      </Textfit>
    </div>
  );
}
