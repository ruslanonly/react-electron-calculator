import { EUnaryOperation } from '../slice';

export const unaryOperationReducer = (
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
    case EUnaryOperation.LOG10:
      return Math.log10(x);
    case EUnaryOperation.TenTimesX:
      return Math.pow(10, x);
    case null:
      return x;
    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ((never: never) => {})(operation);
      return NaN;
  }
};
