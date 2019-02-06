import React from 'react';
import styled from 'styled-components';

import SectionHeader from 'components/Common/SectionHeader';
import CivButton from 'containers/Civs/Button';

const Wrapper = styled.div`
  width: 100%;
  min-width: 725px;
  max-width: 1000px;
  margin: 10px auto 15px;
  padding: 0;
`;

const Options = styled.div`
  margin: 10px 5px 0px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const CivSection = ({ dlcs, civs }) => (
  <Wrapper>
      <SectionHeader 
        title='Available Civilizations'
        description='Below are the civs available for your game. You may choose to remove a civ from the pool by clicking its icon.'
      />
    <Options>
    {
      dlcs.length > 0 && civs.length > 0
      ? civs.map((civ, i) => 
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
        )
      : <div/>
    }
    </Options>
  </Wrapper>
);

export default CivSection;

