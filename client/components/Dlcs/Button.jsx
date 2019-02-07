import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  margin: 0px 5px;
  padding: 10px 5px;
  flex-grow: 1;
  border-radius: 5px;
  transition: background 450ms, color 450ms;
  font-family: 'Roboto Condensed';
  font-size: 16px;
  text-align: center;
  &:hover {
    background: steelblue !important;
    color: #ffffff !important;
  }
`;

const DlcButton = ({ name, active, index, handleClick, dlcs }) => {
  const hypotheticalToggledResult = dlcs.map((dlc, i) => i === index + 1? !dlc.active: dlc.active);
  const hypotheticalNewMax = Math.max(...hypotheticalToggledResult.map((r, i) => r? i: 0));
  return (
    <Button 
      style={{background: `${active? '#ffffff':'#d3d3d3'}`, color: `${active? '#525252':'#a9a9a9'}`}}
      onClick={() => handleClick(index + 1, hypotheticalNewMax < 6? 6: hypotheticalNewMax)}>
      {name}
    </Button>
  );
};

DlcButton.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default DlcButton;

