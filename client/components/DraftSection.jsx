import React from 'react';
import styled from 'styled-components';

import DraftConfig from './../containers/DraftConfig';
import DraftButton from './../containers/DraftButton';
import DraftResults from './../containers/DraftResults';

const Wrapper = styled.div`
  width: 100%;
  min-width: 725px;
  max-width: 1000px;
  margin: 10px auto 15px;
  padding: 0;
`;

const DraftSection = () => (
  <Wrapper>
    <DraftConfig/>
    <DraftButton/>
    <DraftResults/>
  </Wrapper>
);

export default DraftSection;