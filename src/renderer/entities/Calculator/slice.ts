import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum EUnaryOperation {
  SQRT,
  SQUARE,
  SIN,
  COS,
  FLOOR,
  CEIL,
  LN,
  LOG10,
  TenTimesX
}

export enum EBinaryOperation {
  Addition = 0,
  Subtraction = 1,
  Multiplication = 2,
  Division = 3,
}
interface ICalculatorState {
  screen: string;
  operation: EBinaryOperation | null;
  result: number;
  isWaiting: boolean;
}

const initialState: ICalculatorState = {
  operation: null,
  screen: '',
  result: NaN,
  isWaiting: false,
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setScreen: (state, action: PayloadAction<string>) => {
      state.screen = action.payload;
    },

    setOperation: (state, action: PayloadAction<EBinaryOperation | null>) => {
      state.operation = action.payload;
    },

    setResult: (state, action: PayloadAction<number>) => {
      state.result = action.payload;
    },
    setIsWaiting: (state, action: PayloadAction<boolean>) => {
      state.isWaiting = action.payload;
    },
  },
});

export const { setScreen, setOperation, setResult, setIsWaiting } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
