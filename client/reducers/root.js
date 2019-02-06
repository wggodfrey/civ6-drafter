import { combineReducers } from 'redux';

import dlcsReducer from 'reducers/dlcs';
import civsReducer from 'reducers/civs';
import settingsReducer from 'reducers/settings';
import resultsReducer from 'reducers/results';
import tooltipReducer from 'reducers/tooltip';

const rootReducer = combineReducers({
  dlcs: dlcsReducer,
  civs: civsReducer,
  settings: settingsReducer,
  results: resultsReducer,
  tooltip: tooltipReducer,
});

export default rootReducer;
