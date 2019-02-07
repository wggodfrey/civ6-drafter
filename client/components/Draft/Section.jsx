import React from 'react';
import styled from 'styled-components';

import DraftConfig from 'containers/Draft/Config';
import DraftResults from 'containers/Draft/Results';

const Wrapper = styled.div`
  width: 100%;
  min-width: 725px;
  max-width: 1000px;
  margin: 25px auto 45px;
  padding: 0;
  overflow: auto;
`;

const DraftSection = () => (
  <Wrapper>
    <DraftConfig/>
    <DraftResults/>
  </Wrapper>
);

export default DraftSection;