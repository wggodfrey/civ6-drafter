import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 0;
  background: #525252;
  height: 53px;
`;

const Title = styled.div`
  width: calc(100% - 80px);
  padding: 15px 0px 15px 40px;
  float: left;
  color: #fff;
  font-family: 'Roboto Condensed';
  font-size: 20px;
`;

const Banner = () => (
  <Wrapper>
    <Title>minesweeper_redux</Title>
  </Wrapper>
);

export default Banner;