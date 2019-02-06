import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 15%;
  height: 200px;
  display: inline-block;
  float: left;
  margin: 0 0 30px 0;
  padding: 0;
`;

const Button = styled.button`
  width: 80%;
  height: 38px;
  margin: 0 10%;
  line-height: 38px;
  border-radius: 3px;
  color: #525252;
  font-family: 'Roboto Condensed';
  font-size: 16px;
  text-align: center;
  transition: background 450ms, color 450ms;
  position: relative;
  top: 40%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  &:hover {
    background: steelblue !important;
    color: #ffffff !important;
  }
`;

const DraftButton = ({dlcs, civs, players, civsper, ais, handleSelect}) => (
  <Wrapper>
    <Button onClick={() => handleSelect(dlcs, civs, players, civsper, ais)}>
      Draft
    </Button>
  </Wrapper>
);

DraftButton.propTypes = {
  dlcs: PropTypes.arrayOf(PropTypes.any).isRequired,
  civs: PropTypes.arrayOf(PropTypes.any).isRequired,
  players: PropTypes.number,
  civsper: PropTypes.number,
  ais: PropTypes.number,
  handleSelect: PropTypes.func.isRequired,
};

export default DraftButton;