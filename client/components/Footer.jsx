import React from 'react';
import styled from 'styled-components';

const Footer = () => {

  const Wrapper = styled.div`
    width: 100%;
    min-width: 725px;
    padding: 12px 0px 8px;
    background: #525252;
    position: fixed;
    bottom: 0px;
    z-index: 9999;
    text-align: center;
  `;

  const ContactInfo = styled.div`
    position: absolute;
    top: 0px;
    left: calc(50% + 60px);
    padding: 15px 0px 5px;
    font-family: Roboto;
    font-weight: 200;
    color: orchid;
    font-size: 13px;
  `;

  return (
    <Wrapper>
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
        <input type="hidden" name="cmd" value="_donations" />
        <input type="hidden" name="business" value="59KLDT9XT2EBN" />
        <input type="hidden" name="currency_code" value="USD" />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
      </form>
      <ContactInfo>made by 
        <a style={{marginLeft:'3px', color:'#ffffff'}}
           href='https://github.com/wggodfrey/civ6-drafter' 
           target='_blank'>wggodfrey
        </a> (2019)
      </ContactInfo>
    </Wrapper>
  )
};

export default Footer;