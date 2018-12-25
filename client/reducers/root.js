import { combineReducers } from 'redux';

import dlcsReducer from './dlcs.js';
import civsReducer from './civs.js';

const rootReducer = combineReducers({
  dlcs: dlcsReducer,
  civs: civsReducer,
});

export default rootReducer;