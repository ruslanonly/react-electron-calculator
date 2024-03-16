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
    setScreen: (state, actions: PayloadAction<string>) => {
      state.screen = state.screen.concat(actions.payload);
    },
  },
});

export const { setScreen } = calculatorSlice.actions;

export default calculatorSlice.reducer;
