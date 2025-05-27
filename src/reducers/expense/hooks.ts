/*
 * Use useAppDispatch to dispatch actions using action creators
* Use useAppSelector in components to extract data from redux store state
*/
 
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState  } from './store';
 
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();