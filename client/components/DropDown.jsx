import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0px 13px 12px;
  padding: 0px 5px;
  color: #525252;
  font-family: 'Roboto Condensed';
  height: 32px;
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
  height: 32px;
  width: calc(100% - 130px);
  text-align: center;
`;

const ActiveItem = styled.li`
  cursor: pointer;
  line-height: 32px;
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
  &:hover {
    background: steelblue;
    color: #ffffff;
  }
`;

const DropDown = ({label, options, active, open, toggle, handleClick}) => (
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
              data-value={opt}>
            {opt}
            </OtherItem>
          )
        : <div />
      }
    </List>
  </Wrapper>
);

export default DropDown;