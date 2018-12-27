import React from 'react';
import store from './../store/index.js';

import Banner from './Banner';
import DlcSection from './../containers/DlcSection';
import CivSection from './../containers/CivSection';
import DraftSection from './DraftSection';

import { getDlcs } from './../actions/dlcs.js';
import { getCivs } from './../actions/civs.js';
import { getSettings } from './../actions/settings.js';

class App extends React.Component {

  componentDidMount() {
    store.dispatch(getDlcs());
    store.dispatch(getCivs());
    store.dispatch(getSettings());
  }

  render() {
    return (
      <div>
        <Banner />
        <DlcSection />
        <CivSection />
        <DraftSection />
      </div>
    );
  }
};

export default App;
