import React from 'react';
import styled from 'styled-components';

import ResultItem from 'containers/Draft/ResultItem';

const Wrapper = styled.div`
  display: block;
  padding: 0 18px 0;
  height: 46px;
  float: left;
`;

const Player = styled.span`
  display: inline-block;
  float: left;
  color: #525252;
  font-family: 'Roboto Condensed';
  font-size: 13px;
  height: 46px;
  line-height: 46px;
  width: 50px;
`;

const ResultSet = ({player, civs}) => (
  <Wrapper>
    {
      player
      ? <Player>{player}</Player>
      : <div/>
    }
    
    {
      civs.map((civ, i) => 
        <ResultItem 
          key={`p${player.split(' ')[1]}item_${i}`}
          civ={civ} 
        />
      )
    }
  </Wrapper>
);

export default ResultSet;