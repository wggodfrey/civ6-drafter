import React from 'react';
import store from './../store/index.js';

import Banner from './Banner';
import DlcSection from './../containers/Dlcs/Section';
import CivSection from './../containers/Civs/Section';
import DraftSection from './Draft/Section';

import { getDlcs } from './../actions/dlcs.js';
import { getCivs } from './../actions/civs.js';
import { getSettings } from './../actions/settings.js';
import { getToolTip } from './../actions/tooltip.js';

class App extends React.Component {

  componentDidMount() {
    store.dispatch(getDlcs());
    store.dispatch(getCivs());
    store.dispatch(getSettings());
    store.dispatch(getToolTip());
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
