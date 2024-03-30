import { EBinaryOperation } from '../slice';
import { binaryOperationReducer } from './binaryOperationReducer';

test('[binaryOperationReducer] 1 + 2 = 3', () => {
  expect(binaryOperationReducer(1, 2, EBinaryOperation.Addition)).toBe(3);
});

test('[binaryOperationReducer] 1 * 2 = 2', () => {
  expect(binaryOperationReducer(1, 2, EBinaryOperation.Multiplication)).toBe(2);
});

test('[binaryOperationReducer] 15 / 3 = 5', () => {
  expect(binaryOperationReducer(15, 3, EBinaryOperation.Division)).toBe(5);
});

test('[binaryOperationReducer] 8 - 10 = -2', () => {
  expect(binaryOperationReducer(8, 10, EBinaryOperation.Subtraction)).toBe(-2);
});
