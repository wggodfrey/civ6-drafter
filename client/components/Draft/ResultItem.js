import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: inline-block;
  float: left;
  width: 36px;
  height: 36px;
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

const ResultItem = ({
  civ, handleMouseIn, handleMouseOut, handleMouseMove,
}) => (
  <Wrapper>
    <Image
      src={`https://s3.amazonaws.com/civ6-drafter/leaders/${civ.leader.split(' ').join('_')}/${civ.nation}.png`}
      onMouseEnter={() => handleMouseIn(civ)}
      onMouseLeave={handleMouseOut}
      onMouseMove={handleMouseMove}
    />
  </Wrapper>
);

ResultItem.propTypes = {
  civ: PropTypes.shape({
    _id: PropTypes.string,
    id: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    dlc_id: PropTypes.number.isRequired,
    leader: PropTypes.string.isRequired,
    bonus_name: PropTypes.string.isRequired,
    bonus_desc: PropTypes.string.isRequired,
    nation: PropTypes.string.isRequired,
    ability_name: PropTypes.string.isRequired,
    ability_desc: PropTypes.string.isRequired,
    traits: PropTypes.arrayOf(PropTypes.any).isRequired,
  }).isRequired,
  handleMouseIn: PropTypes.func.isRequired,
  handleMouseOut: PropTypes.func.isRequired,
  handleMouseMove: PropTypes.func.isRequired,
};

export default ResultItem;
