import { combineReducers } from 'redux';

import settingsReducer from './settings.js';

const rootReducer = combineReducers({
  settings: settingsReducer,
});

export default rootReducer;