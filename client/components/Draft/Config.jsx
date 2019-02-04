import React from 'react';
import styled from 'styled-components';

import DropDown from 'components/Draft/DropDown';

const Wrapper = styled.div`
  width: 40%;
  height: 200px;
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

const DraftConfig = ({dlcs, civs, players, civsper, menu1open, menu2open, toggleMenu1, toggleMenu2, handleSelect1, handleSelect2}) => (
  <Wrapper>
    <Title>Draft Configuration</Title>
    <DropDown
      label={`Number of Players`}
      options={[1, 2, 3, 4, 5, 6, 7, 8]}
      active={players}
      open={menu1open}
      toggle={toggleMenu1}
      handleSelect={handleSelect1}
    />
    <DropDown
      label={`Civilzations per Player`}
      options={[1, 2, 3, 4]}
      active={civsper}
      open={menu2open}
      toggle={toggleMenu2}
      handleSelect={handleSelect2}
    />
  </Wrapper>
);

export default DraftConfig;

