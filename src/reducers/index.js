import { favoriteReducer } from './favoriteReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  favoriteState: favoriteReducer,
});