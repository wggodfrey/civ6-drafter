import { combineReducers } from 'redux';

import dlcsReducer from './dlcs.js';
import civsReducer from './civs.js';
import settingsReducer from './settings.js';

const rootReducer = combineReducers({
  dlcs: dlcsReducer,
  civs: civsReducer,
  settings: settingsReducer,
});

export default rootReducer;