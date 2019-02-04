import React from 'react';
import styled from 'styled-components';

import CivButton from 'containers/Civs/Button';

const Wrapper = styled.div`
  width: 100%;
  min-width: 725px;
  max-width: 1000px;
  margin: 10px auto 15px;
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
  margin: 10px 5px 0px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const CivSection = ({ dlcs, civs }) => (
  <Wrapper>
    <Title>Available Civilizations</Title>
    <Options>
    {
      dlcs.length > 0 && civs.length > 0
      ? civs.map((civ, i) => (
          dlcs[civ.dlc_id].active
          ? <CivButton
              key={`civ_${i}`}
              leader={civ.leader}
              nation={civ.nation}
              active={civ.active}
              index={i}
            />
          : <div 
              key={`civ_${i}`}
              style={{display:'none'}}
            />
        ))
      : <div/>
    }
    </Options>
  </Wrapper>
);

export default CivSection;

