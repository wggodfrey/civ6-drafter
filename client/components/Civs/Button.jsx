import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  margin: 0 0 7px 0;
  padding: 0;
  background: transparent;
`;

const Label = styled.div`
  margin: 4px 0px 0px 0px;
  color: #525252;
  font-family: 'Roboto Condensed';
  font-size: 12px;
`;

const Holder = styled.div`
  width: 50px;
  height: 50px;
  margin: 0px 10px;
  padding: 1px;
  border-radius: 30px;
  transition: background 250ms, color 250ms;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
`;

const X = styled.i`
  position: relative;
  top: -38px;
  color: red;
`;

const CivButton = ({ leader, nation, active, index, handleClick }) => (
  <Button onClick={() => handleClick(index)}>
    <Holder style={{background:`${active? 'transparent':'rgba(20,20,20,0.9)'}`}}>
      <Image 
        src={`https://s3.amazonaws.com/civ6-drafter/leaders/${leader.split(' ').join('_')}/${nation}.png`}
        style={{opacity:`${active? 1: 0.25}`}}
      />
      {
        active
        ? <div />
        : <X className='material-icons'>close</X>
      }
    </Holder>
    <Label>
      {nation}
    </Label>
  </Button>
);

CivButton.propTypes = {
  leader: PropTypes.string.isRequired,
  nation: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CivButton;

