import { EBinaryOperation } from '../slice';

export const binaryOperationReducer = (
  x: number,
  y: number,
  operation: EBinaryOperation | null,
) => {
  switch (operation) {
    case EBinaryOperation.Addition:
      return (Number.isNaN(x) ? 0 : x) + y;
    case EBinaryOperation.Subtraction:
      return (Number.isNaN(x) ? 0 : x) - y;
    case EBinaryOperation.Multiplication:
      return (Number.isNaN(x) ? 1 : x) * y;
    case EBinaryOperation.Division:
      return (Number.isNaN(x) ? 1 : x) / y;
    case null:
      return y;
    default:
      ((never: never) => {})(operation);
      return NaN;
  }
};
