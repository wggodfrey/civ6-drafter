import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0 18px 0;
  height: 48px;
  float: left;
`;

const Player = styled.span`
  display: inline-block;
  float: left;
  color: #525252;
  font-family: 'Roboto Condensed';
  font-size: 13px;
  height: 48px;
  line-height: 48px;
  width: 60px;
`;

const Civ = styled.img`
  display: inline-block;
  float: left;
  margin: 5px;
  max-width: calc(100% - 10px);
  max-height: calc(100% - 10px);
  border-radius: 50%;
  border: solid 1px #a9a9a9;
  &:hover {
    border: solid 1px gold;
  }
`;

const ResultLine = ({player, civs}) => (
  <Wrapper>
    <Player>{player}</Player>
    {
      civs.map((civ, i) => 
        <Civ 
          key={`p${player.split(' ')[1]}civ_${i}`}
          src={`https://s3.amazonaws.com/civ6-drafter/leaders/${civ.leader.split(' ').join('_')}/civflag.png`} />
      )
    }
  </Wrapper>
)

export default ResultLine;