import React from 'react';
import styled from 'styled-components';

const DlcButton = ({ name, active, index, handleClick }) => {

  const Button = styled.button`
    margin: 0px 5px;
    padding: 10px 5px;
    flex-grow: 1;
    border-radius: 5px;
    background: ${active? '#ffffff':'#d3d3d3'};
    color: ${active? '#525252':'#a9a9a9'};
    transition: background 250ms, color 250ms;
    font-family: 'Roboto Condensed';
    font-size: 16px;
    text-align: center;
    &:hover {
      background: ${active?'#F7AAA2':'#A9E796'};
      color: #ffffff;
    }
  `;

  return (
    <Button onClick={() => handleClick(index + 1)}>
      {name}
    </Button>
  )
};

export default DlcButton;

