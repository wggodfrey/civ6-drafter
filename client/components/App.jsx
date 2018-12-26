import React from 'react';
import store from './../store/index.js';

import Banner from './Banner';
import DlcSection from './../containers/DlcSection';
import CivSection from './../containers/CivSection';

import { getDlcs } from './../actions/dlcs.js';
import { getCivs } from './../actions/civs.js';

class App extends React.Component {

  componentDidMount() {
    store.dispatch(getDlcs());
    store.dispatch(getCivs());
  }

  render() {
    return (
      <div>
        <Banner />
        <DlcSection />
        <CivSection />
      </div>
    );
  }
};

export default App;
