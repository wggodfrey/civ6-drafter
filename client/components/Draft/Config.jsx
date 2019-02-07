import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DraftButton from 'containers/Draft/Button';
import DropDownSelect from 'components/Common/DropDownSelect';

const Wrapper = styled.div`
  width: calc(100%/3);
  display: inline-block;
  float: left;
  margin: 0 0 30px 0;
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

const DraftConfig = (
  {players, civsper, ais, handleSelectPlayers, handleSelectCivsPer, handleSelectAIs}
  ) => (
  <Wrapper>
    <Title>Draft Configuration</Title>
    <DropDownSelect
      labelSingular={`Human Player`}
      labelPlural={`Human Players`}
      options={[1, 2, 3, 4, 5, 6, 7, 8]}
      active={players}
      handleSelect={handleSelectPlayers}
    />
    <DropDownSelect
      labelSingular={`Civ Option per Human Player`}
      labelPlural={`Civ Options per Human Player`}
      options={[1, 2, 3, 4]}
      active={civsper}
      handleSelect={handleSelectCivsPer}
    />
    <DropDownSelect
      labelSingular={`AI Player`}
      labelPlural={`AI Players`}
      options={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]}
      active={ais}
      handleSelect={handleSelectAIs}
    />
    <DraftButton />
  </Wrapper>
);

DraftConfig.propTypes = {
  players: PropTypes.number,
  civsper: PropTypes.number,
  ais: PropTypes.number,
  handleSelectPlayers: PropTypes.func.isRequired,
  handleSelectCivsPer: PropTypes.func.isRequired,
  handleSelectAIs: PropTypes.func.isRequired,
};

export default DraftConfig;

