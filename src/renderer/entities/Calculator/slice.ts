import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum EOperation {
  Addition = 0,
  Subtraction = 1,
  Multiplication = 2,
  Division = 3,
}
interface ICalculatorState {
  screen: string;
  operation: EOperation | null;
  result: number;
}

const initialState: ICalculatorState = {
  operation: null,
  screen: '',
  result: NaN,
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setScreen: (state, action: PayloadAction<string>) => {
      state.screen = action.payload;
    },

    setOperation: (state, action: PayloadAction<EOperation>) => {
      state.operation = action.payload;
    },

    setResult: (state, action: PayloadAction<number>) => {
      state.result = action.payload;
    },
  },
});

export const { setScreen, setOperation, setResult } = calculatorSlice.actions;

export default calculatorSlice.reducer;
