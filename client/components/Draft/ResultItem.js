import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  float: left;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: transparent;
  &:hover {
    background: rgba(200,200,200,0.5)
  }
`;

const Image = styled.img`
  margin: 5px;
  max-width: calc(100% - 10px);
  max-height: calc(100% - 10px);
  border-radius: calc(50% + 5px);
`;

const ResultItem = ({civ, handleMouseIn, handleMouseOut, handleMouseMove}) => (
  <Wrapper>
    <Image 
      src={`https://s3.amazonaws.com/civ6-drafter/leaders/${civ.leader.split(' ').join('_')}/civflag.png`}
      onMouseEnter={() => handleMouseIn(civ)}
      onMouseLeave={handleMouseOut}
      onMouseMove={handleMouseMove}
    />
  </Wrapper>
);

export default ResultItem;