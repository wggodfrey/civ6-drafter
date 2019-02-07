import React from 'react';
import store from 'store';

import styled, { createGlobalStyle } from 'styled-components';

import Banner from 'components/Banner';
import DlcSection from 'containers/Dlcs/Section';
import CivSection from 'containers/Civs/Section';
import DraftSection from 'components/Draft/Section';
import Footer from 'components/Footer';

import { getDlcs } from 'actions/dlcs.js';
import { getCivs } from 'actions/civs.js';
import { getSettings } from 'actions/settings.js';
import { getToolTip } from 'actions/tooltip.js';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    height: 100%;
    background: #efefef;
  }
  button {
    padding: 0;
    border: none;
    cursor: pointer;
    outline: none !important;
    outline-offset: none !important;
    border: none !important;
  }
  input {
    border: solid 1px #f2f2f2;
    outline: none !important;
    outline-offset: none !important;
  }
  ul {
    list-style: none;
    padding-inline-start: 0;
    padding: 0;
    margin: 0;
  }
  p {
    margin-block-start: 0px;
    margin-block-end: 4px;
  }
`;

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
        <GlobalStyle />
        <Banner />
        <DlcSection />
        <CivSection />
        <DraftSection />
        <Footer />
      </div>
    );
  }
};

export default App;
