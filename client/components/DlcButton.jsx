import React from 'react';
import styled from 'styled-components';

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

const DlcButton = ({ name, active, index, handleClick }) => (
  <Button 
    style={{background: `${active? '#ffffff':'#d3d3d3'}`, color: `${active? '#525252':'#a9a9a9'}`}}
    onClick={() => handleClick(index + 1)}>
    {name}
  </Button>
);

export default DlcButton;

