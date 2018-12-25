import React from 'react';
import styled from 'styled-components';

const Banner = () => {

  const Wrapper = styled.div`
    width: 100%;
    min-width: 725px;
    padding: 10px 0px;
    background: #525252;
  `;

  const Title = styled.div`
    color: #ffffff;
    font-family: 'Roboto Condensed';
    font-size: 20px;
    text-align: center;
  `;

  return (
    <Wrapper>
      <Title>civ6 drafter</Title>
    </Wrapper>
  )
};

export default Banner;