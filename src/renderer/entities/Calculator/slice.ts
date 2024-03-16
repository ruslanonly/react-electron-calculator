import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICalculatorState {
  screen: string;
  operation: string;
  result: number;
}

const initialState: ICalculatorState = {
  operation: '',
  screen: '',
  result: 0,
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setScreen: (state, action: PayloadAction<string>) => {
      state.screen = state.screen.concat(action.payload);
    },

    setOperation: (state, action: PayloadAction<string>) => {
      state.operation = action.payload;
    },

    setResult: (state, action: PayloadAction<number>) => {
      state.result = action.payload;
    },
  },
});

export const { setScreen, setOperation, setResult } = calculatorSlice.actions;

export default calculatorSlice.reducer;
