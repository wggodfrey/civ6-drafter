import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ResultItem from 'containers/Draft/ResultItem';

const Wrapper = styled.div`
  width: calc(100% - 36px);
  height: 36px;
  padding: 0 18px 0;
  float: left;
`;

const Player = styled.span`
  display: inline-block;
  float: left;
  color: #525252;
  font-family: 'Roboto Condensed';
  font-size: 13px;
  height: 36px;
  line-height: 36px;
  width: 50px;
`;

const ResultSet = ({player, civs}) => (
  <Wrapper>
    <Player>{player}</Player>
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

ResultSet.propTypes = {
  player: PropTypes.string.isRequired,
  civs: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default ResultSet;