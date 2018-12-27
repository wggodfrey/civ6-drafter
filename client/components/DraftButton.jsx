import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 20%;
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

const DraftButton = ({dlcs, civs, players, civsper, handleSelect}) => (
  <Wrapper>
    <Button onClick={() => handleSelect(dlcs, civs, players, civsper)}>
      Draft
    </Button>
  </Wrapper>
);

export default DraftButton;