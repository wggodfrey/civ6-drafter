import React from 'react';
import styled from 'styled-components';

const Footer = () => {

  const Wrapper = styled.div`
    width: 100%;
    min-width: 725px;
    padding: 10px 0px;
    background: #525252;
    position: fixed;
    bottom: 0px;
    z-index: 9999;
  `;

  return (
    <Wrapper>
      hi
    </Wrapper>
  )
};

export default Footer;