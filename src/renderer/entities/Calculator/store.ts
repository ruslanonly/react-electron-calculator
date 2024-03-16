import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

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

export const store = configureStore({
  reducer: {
    calculator: calculatorSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
