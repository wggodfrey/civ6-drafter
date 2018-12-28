import React from 'react';
import styled from 'styled-components';

import DlcButton from './../../containers/Dlcs/Button';

const Wrapper = styled.div`
  width: 100%;
  min-width: 725px;
  max-width: 1000px;
  margin: 10px auto 20px;
  padding: 0;
`;

const Title = styled.div`
  width: calc(100% - 34px);
  margin: 5px 5px 10px 5px;
  padding: 5px 13px;
  color: #525252;
  font-family: 'Roboto Condensed';
  font-size: 14px;
  border-bottom: 2px solid #525252;
`;

const Options = styled.div`
  margin: 0px 13px;
  display: flex;
`;


const DlcSection = ({ dlcs }) => (
  <Wrapper>
    <Title>Downloadable Content</Title>
    <Options>
    {
      dlcs.length > 0
      ? dlcs.slice(1).map((dlc, i) => (
          <DlcButton
            key={`dlc_${i}`}
            name={dlc.name}
            active={dlc.active}
            index={i}
          />
        ))
      : <div />
    }
    </Options>
  </Wrapper>
);

export default DlcSection;