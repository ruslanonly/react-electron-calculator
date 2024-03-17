import { useAppSelector } from 'shared';
import './Screen.css';

export function Screen() {
  const screen = useAppSelector((state) => state.calculator.screen);
  return <div className="Screen">{screen}</div>;
}
