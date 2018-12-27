import React from 'react';
import styled from 'styled-components';

import ResultLine from './ResultLine';

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
  margin: 5px 5px 2px 5px;
  padding: 5px 13px;
  color: #525252;
  font-family: 'Roboto Condensed';
  font-size: 14px;
  border-bottom: 2px solid #525252;
`;

const DraftResults = ({results}) => (
  <Wrapper>
    <Title>Draft Results</Title>
    {
      Object.keys(results).map((player, i) => 
        <ResultLine 
          key={`res_${i}`}
          player={player} 
          civs={results[player]}
        />
      )
    }
  </Wrapper>
);

export default DraftResults;
