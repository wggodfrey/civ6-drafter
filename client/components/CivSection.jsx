import React from 'react';
import styled from 'styled-components';

import CivButton from './../containers/CivButton';

const Wrapper = styled.div`
  width: 100%;
  min-width: 725px;
  max-width: 1000px;
  margin: 10px auto 20px;
  padding: 0;
`;

const Title = styled.div`
  width: calc(100% - 34px);
  margin: 5px 5px 5px 5px;
  padding: 5px 13px;
  color: #525252;
  font-family: 'Roboto Condensed';
  font-size: 14px;
  border-bottom: 2px solid #525252;
`;

const Options = styled.div`
  margin: 0px 13px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const CivSection = ({ dlcs, civs }) => (
  <Wrapper>
    <Title>Available Civs</Title>
    <Options>
    {
      dlcs.length > 0 && civs.length > 0
      ? civs.map((civ, i) => (
          dlcs[civ.dlc_id].active
          ? <CivButton
              key={`civ_${i}`}
              leader={civ.leader}
              active={civ.active}
              index={i}
            />
          : <div 
            key={`civ_${i}`}
            />
        ))
      : <div />
    }
    </Options>
  </Wrapper>
);

export default CivSection;

