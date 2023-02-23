import {createStore, combineReducers} from 'redux';
import CountReducer from './reducer/countReducer';

const rootReducer = combineReducers({
  count: CountReducer,
});

export const store = createStore(rootReducer);
