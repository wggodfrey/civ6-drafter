import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SectionHeader from 'components/Common/SectionHeader';
import DlcButton from 'containers/Dlcs/Button';

const Wrapper = styled.div`
  width: 100%;
  min-width: 725px;
  max-width: 1000px;
  margin: 10px auto 20px;
  padding: 0;
`;

const Options = styled.div`
  margin: 0px 13px;
  display: flex;
`;

const DlcSection = ({ dlcs }) => (
  <Wrapper>
    <SectionHeader 
      title='Downloadable Content'
      description='Select the DLC packages you have access to. This determines the civ pool available and various civ attributes.'
    />
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

DlcSection.propTypes = {
  dlcs: PropTypes.array.isRequired,
};

export default DlcSection;