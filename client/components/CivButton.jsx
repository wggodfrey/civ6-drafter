import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  min-width: 70px;
  margin: 0;
  flex-grow: 1;
  padding: 0;
  background: transparent;
  text-align: center;
`;

const CivButton = ({ leader, active, index, handleClick }) => {

  const Holder = styled.div`
    width: 50px;
    height: 50px;
    margin: 0px auto;
    padding: 5px;
    border-radius: 30px;
    background: ${active? 'transparent':'red'};
    transition: background 250ms, color 250ms;
    &:hover {
      background: #d3d3d3;
    }
  `;

  const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
    border-radius: 50%;
    opacity: ${active? 1: 0.2};
  `;

  return (
    <Button onClick={() => handleClick(index)}>
      <Holder>
        <Image src={`https://s3.amazonaws.com/civ6-drafter/leaders/${leader.split(' ').join('_')}/civflag.png`}/>
      </Holder>
    </Button>
  )
};

export default CivButton;

