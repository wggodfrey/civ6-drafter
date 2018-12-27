import React from 'react';
import styled from 'styled-components';

import DraftConfig from './../containers/DraftConfig';


const Wrapper = styled.div`
  width: 100%;
  min-width: 725px;
  max-width: 1000px;
  margin: 10px auto 20px;
  padding: 0;
`;

const DraftSection = () => (
  <Wrapper>
    <DraftConfig/>
  </Wrapper>
);

export default DraftSection;