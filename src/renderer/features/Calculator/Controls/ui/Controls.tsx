import { Button } from 'shared/ui';
import './Controls.css';

export function Controls() {
  return (
    <div className="Controls">
      <div className="Controls--left">
        <Button type="additional">sin</Button>
        <Button type="additional">cos</Button>
        <Button type="additional">floor</Button>
        <Button type="additional">ceil</Button>
      </div>
      <div className="Controls--right">
        <div className="Controls--operations">
          <Button type="operation">AC</Button>
          <Button type="operation">
            x<sup>2</sup>
          </Button>
          <Button type="operation">sqrt</Button>
        </div>
        <div className="Controls--functions">
          <Button type="function">÷</Button>
          <Button type="function">×</Button>
          <Button type="function">-</Button>
          <Button type="function">+</Button>
          <Button type="function">=</Button>
        </div>
        <div className="Controls--main">
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button type="zero">0</Button>
          <Button>,</Button>
        </div>
      </div>
    </div>
  );
}
