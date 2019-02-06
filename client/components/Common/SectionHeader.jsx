import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: calc(100% - 34px);
  margin: 5px 5px 10px 5px;
  padding: 5px 13px;
  border-bottom: 2px solid #525252;
`;

const InfoButton = styled.button`
  margin: 0 5px 0 0;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: #525252;
  transition: background 250ms, color 250ms;
  float: left;
  &:hover {
    background: steelblue;
  }
`;

const Title = styled.span`
  color: #525252;
  font-family: 'Roboto Condensed';
  font-size: 14px;
`;

const Detail = styled.span`
  width: calc(100% - 34px);
  margin: 0 5px 10px 5px;
  padding: 0 13px;
  color: #a9a9a9;
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  font-style: italic;
  color: transparent;
  transition: all 0.3s ease-in;
  &.active {
    color: steelblue;
  }
`;

const I = styled.i`
  color: #ffffff;
  font-size: 17px;
`;

class SectionHeader extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    }
  }

  handleMouseAction() {
    this.setState(prev => ({
      hover: !prev.hover,
    }));
  }

  render() {
    const { title, description } = this.props;
    const { hover } = this.state;

    return (
      <Wrapper>
        <InfoButton
          onMouseEnter={this.handleMouseAction.bind(this)}
          onMouseLeave={this.handleMouseAction.bind(this)}
        >
          <I className='material-icons'>info</I>
        </InfoButton>
        <Title>{title}</Title>
        <Detail className={hover? 'active': 'inactive'}>
          {hover? description: ''}
        </Detail>
      </Wrapper>
    )
  }
}

export default SectionHeader;