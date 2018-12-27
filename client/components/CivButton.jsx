import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin: 0 0 7px 0;
  padding: 0;
  background: transparent;
`;

const Label = styled.div`
  color: #525252;
  font-family: 'Roboto Condensed';
  font-size: 12px;
`;

const CivButton = ({ leader, nation, active, index, handleClick }) => {

  const Holder = styled.div`
    width: 50px;
    height: 50px;
    margin: 0px 10px;
    padding: 5px;
    border-radius: 30px;
    background: ${active? 'transparent':'red'};
    transition: background 250ms, color 250ms;
    &:hover {
      background: ${active? '#d3d3d3':'red'};
    }
  `;

  const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
    border-radius: 50%;
    opacity: ${active? 1: 0.5};
  `;

  return (
    <Button onClick={() => handleClick(index)}>
      <Holder>
        <Image src={`https://s3.amazonaws.com/civ6-drafter/leaders/${leader.split(' ').join('_')}/civflag.png`}/>
      </Holder>
      <Label>
        {nation}
      </Label>
    </Button>
  )
};

export default CivButton;

