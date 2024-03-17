import { Screen } from 'features/Calculator/Screen';
import { Controls } from 'features/Calculator/Controls';
import './CalculatorWidget.css';

export function CalculatorWidget() {
  return (
    <div className="CalculatorWidget">
      <Screen />
      <Controls />
    </div>
  );
}
