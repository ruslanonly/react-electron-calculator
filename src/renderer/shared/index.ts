import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// eslint-disable-next-line no-undef
export const useAppDispatch: () => AppDispatch = useDispatch;

// eslint-disable-next-line no-undef
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
