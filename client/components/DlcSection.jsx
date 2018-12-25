import React from 'react';
import styled from 'styled-components';

import DlcButton from './../containers/DlcButton';

const Wrapper = styled.div`
  width: 100%;
  min-width: 725px;
  max-width: 1000px;
  margin: 10px auto;
  padding: 0;
  height: 75px;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  width: calc(100% - 20px);
  margin: 5px;
  padding: 5px;
  color: #525252;
  font-family: 'Roboto Condensed';
  font-size: 14px;
  border-bottom: 2px solid #525252;
`;

const DlcSection = ({ dlcs }) => (
  <Wrapper>
    <Title>DLC Content</Title>
    <Row>
    {
      dlcs.length > 0
      ? dlcs.map((dlc, i) => (
          <DlcButton
            key={`dlc_${i}`}
            name={dlc.name}
            active={dlc.active}
            index={i}
            count={dlcs.length}
          />
        ))
      : <div />
    }
    </Row>
  </Wrapper>
);

export default DlcSection;