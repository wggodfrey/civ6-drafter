import { combineReducers } from 'redux';

import dlcsReducer from './dlcs.js';
import civsReducer from './civs.js';
import settingsReducer from './settings.js';
import resultsReducer from './results.js';

const rootReducer = combineReducers({
  dlcs: dlcsReducer,
  civs: civsReducer,
  settings: settingsReducer,
  results: resultsReducer,
});

export default rootReducer;