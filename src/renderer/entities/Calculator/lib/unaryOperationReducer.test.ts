import { EUnaryOperation } from '../slice';
import { unaryOperationReducer } from './unaryOperationReducer';

test('[unaryOperationReducer] sqrt(25) = 5', () => {
  expect(unaryOperationReducer(25, EUnaryOperation.SQRT)).toBe(5);
});

test('[unaryOperationReducer] square(25) = 625', () => {
  expect(unaryOperationReducer(25, EUnaryOperation.SQUARE)).toBe(625);
});

test('[unaryOperationReducer] sin(90) = 1', () => {
  expect(unaryOperationReducer(90, EUnaryOperation.SIN)).toBe(1);
});

test('[unaryOperationReducer] cos(0) = 1', () => {
  expect(unaryOperationReducer(0, EUnaryOperation.COS)).toBe(1);
});

test('[unaryOperationReducer] ceil(25.9) = 30', () => {
  expect(unaryOperationReducer(25, EUnaryOperation.CEIL)).toBe(25);
});

test('[unaryOperationReducer] floor(25.9) = 25', () => {
  expect(unaryOperationReducer(25, EUnaryOperation.FLOOR)).toBe(25);
});
