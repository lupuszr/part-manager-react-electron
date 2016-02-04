import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import parts from './parts';

const rootReducer = combineReducers({
  parts,
  form: formReducer
});

export default rootReducer;
