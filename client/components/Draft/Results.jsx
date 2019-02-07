import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ResultSet from 'components/Draft/ResultSet';
import ToolTip from 'containers/Draft/ToolTip';

const Wrapper = styled.div`
  width: calc(200%/3);
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

const SubHeader = styled.div`
  width: calc(100% - 34px);
  float: left;
  margin: 5px 5px 2px 5px;
  padding: 0px 13px 2px;
  color: #a9a9a9;
  font-family: Roboto;
  font-weight: 400;
  font-size: 11px;
  border-bottom: solid 1px #a9a9a9;
`;

const DraftResults = ({results, tooltip}) => (
  <Wrapper>
    <Title>Draft Results</Title>
    {
      tooltip
      ? <ToolTip />
      : <div />
    }
    {
      (results['Player 1'] && results['Player 1'].length > 0)
      ? <div>
          <SubHeader>Human Players</SubHeader>
          {
            Object.keys(results).filter(d => d !== 'AIs').map((player, i) => 
              <ResultSet 
                key={`res_${i}`}
                player={player} 
                civs={results[player]}
              />
            )
          }
        </div>
      : <div />
    }
    {
      (results['AIs'] && results['AIs'].length > 0)
      ? <div>
          <SubHeader>AI Players</SubHeader>
          {
            results['AIs'].map((player, i) => {
              let index = i + Object.keys(results).length;
              return (
                <ResultSet 
                  key={`res_${index}`}
                  player={`Player ${index}`} 
                  civs={[player]}
                />
              )
            })
          }
        </div>
      : <div />
    }
  </Wrapper>
);

DraftResults.propTypes = {
  results: PropTypes.objectOf(PropTypes.any),
  tooltip: PropTypes.objectOf(PropTypes.any),
};

export default DraftResults;
