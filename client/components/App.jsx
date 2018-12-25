import React from 'react';
import store from './../store/index.js';

import Banner from './Banner';
import DlcSection from './../containers/DlcSection';

import { getDlcs } from './../actions/dlcs.js';

class App extends React.Component {

  componentDidMount() {
    store.dispatch(getDlcs());
  }

  render() {
    return (
      <div>
        <Banner />
        <DlcSection />
      </div>
    );
  }
};

export default App;
