import { Button } from 'shared/ui';
import './Controls.css';

export function Controls() {
  return (
    <div className="Controls">
      <Button type="operation">AC</Button>
      <Button type="operation">±</Button>
      <Button type="operation">%</Button>
      <Button type="function">÷</Button>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button type="function">×</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button type="function">-</Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button type="function">+</Button>
      <Button type="zero">0</Button>
      <Button>,</Button>
      <Button type="function">=</Button>
    </div>
  );
}
