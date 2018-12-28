import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0px 13px 12px;
  padding: 0px 5px;
  color: #525252;
  font-family: 'Roboto Condensed';
  height: 34px;
`;

const Label = styled.span`
  width: 130px;
  height: 32px;
  float: left;
  line-height: 32px;
  font-size: 13px;
`;

const List = styled.ul`
  float: left;
  height: 34px;
  width: calc(100% - 130px);
  text-align: center;
`;

const ActiveItem = styled.li`
  cursor: pointer;
  line-height: 34px;
  border-radius: 3px;
  background: #ffffff;
`;

const OtherItem = styled.li`
  cursor: pointer;
  line-height: 24px;
  background: #d3d3d3;
  border-top: solid 1px #efefef;
  position: relative;
  top: -3px;
  z-index: 2;
  &:hover {
    background: steelblue;
    color: #ffffff;
  }
`;

const Carat = styled.span`
  width: 0; 
  height: 0; 
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #525252;
  pointer-events: none;
  float: right;
  position: relative;
  top: -16px;
  right: 10px;
  z-index: 1;
`;

const DropDown = ({label, options, active, open, toggle, handleSelect}) => (
  <Wrapper>
    <Label>{`${label}:`}</Label>
    <List onClick={toggle}>
      <ActiveItem>
        {active}
      </ActiveItem>
      {
        open
        ? options.map((opt, i) => 
            <OtherItem 
              key={`li0_${i}`}
              value={opt}
              onClick={handleSelect}>
            {opt}
            </OtherItem>
          )
        : <Carat/>
      }
    </List>
  </Wrapper>
);

export default DropDown;