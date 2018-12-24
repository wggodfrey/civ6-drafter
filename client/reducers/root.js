import { combineReducers } from 'redux';

import civsReducer from './civs.js';

const rootReducer = combineReducers({
  civs: civsReducer,
});

export default rootReducer;