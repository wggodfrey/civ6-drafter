import { combineReducers } from 'redux';

import dlcsReducer from './dlcs.js';
import civsReducer from './civs.js';
import settingsReducer from './settings.js';
import resultsReducer from './results.js';
import tooltipReducer from './tooltip.js';

const rootReducer = combineReducers({
  dlcs: dlcsReducer,
  civs: civsReducer,
  settings: settingsReducer,
  results: resultsReducer,
  tooltip: tooltipReducer,
});

export default rootReducer;