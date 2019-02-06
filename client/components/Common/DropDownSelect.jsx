import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  position: relative;
  margin: 0px 0px 12px 8px;
  padding: 0px 5px;
  color: #525252;
  font-family: 'Roboto Condensed';
  transition: 0.3s ease all;
`;

const Input = styled.input`
  width: calc(100% - 30px);
  height: 30px;
  padding: 10px 10px 0px;
  border-radius: 5px;
`;

const Label = styled.label`
  position: absolute;
  pointer-events: none;
  left: 15px;
  top: 14px;
  transition: 0.3s ease all;
  opacity: 1;
  font-size: 12px;

  ${Input}:focus ~ & {
    top: 6px;
    left: 15px;
    font-size: 11px;
    opacity: 0.4;
  }
`;

const ClickCatcher = styled.div`
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: transparent;
`;

const List = styled.div`
  position: relative;
  width: calc(100% - 8px);
  z-index: 1;
  border-radius: 5px;
  overflow-x: auto;
  transition: 0.3s ease all;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const Option = styled.div`
  width: calc(20% - 22px);
  text-align: center;
  padding: 3px 10px 1px;
  margin: 1px;
  font-size: 11px;
  background: #ffffff;
  cursor: pointer;
  &.active {
    background: #e5e5e5;
    color: #525252;
  }
  &.inactive {
    color: #a9a9a9;
  }
  &:hover {
    background: steelblue;
    color: #ffffff;
  }
`

const Carat = styled.span`
  width: 0; 
  height: 0; 
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #525252;
  pointer-events: none;
  float: right;
  position: absolute;
  top: 20px;
  right: 30px;
  z-index: 1;
`;

class DropDownSelect extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggleDropDown() {
    this.input.value = '';
    this.setState(prev => ({
      open: !prev.open,
    }));
  }

  handleKeyDown(e) {
    if (e.key === 'Tab') {
      this.input.blur();
      this.toggleDropDown();
    }
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      if (this.props.options.includes(parseInt(this.input.value))) {
        this.props.handleSelect(this.input.value);
      } else {
        this.props.handleSelect(null);
      }
      this.input.blur();
      this.toggleDropDown();
    }
  }

  render() {
    const { labelSingular, labelPlural, options, active, handleSelect } = this.props;
    return (
      <Wrapper
        style={{zIndex: this.state.open? '99': '0'}}>
        <Input 
          ref={ ref => this.input = ref }
          onFocus={ this.toggleDropDown.bind(this) }
          onKeyDown={ this.handleKeyDown.bind(this) }
          onKeyPress={ this.handleKeyPress.bind(this) }
        />
        {
          active === null
          ? <Label>{`Select Number of ${labelPlural}`}</Label>
          : <Label>{`${active} ${active === 1? labelSingular: labelPlural}`}</Label>
        }
        <ClickCatcher 
          style={{pointerEvents: this.state.open? 'auto': 'none'}}
          onClick={ this.toggleDropDown.bind(this) }/>
          <List
            style={{
              height: `${this.state.open? '100%': '0px'}`,
              padding: `${this.state.open? '5px 0': '0'}`,
            }}
            onClick={ this.toggleDropDown.bind(this) }>
            {
              options.map(option => 
                <Option
                  key={`option_${option}`}
                  className={option === active? 'active': 'inactive'}
                  onClick={() => { handleSelect(option) }}>
                  {option}
                </Option>
              )
            }
          </List>
          {
            !this.state.open
            ? <Carat />
            : <div />
          }
      </Wrapper>
    )
  }
};

DropDownSelect.propTypes = {
  labelSingular: PropTypes.string.isRequired,
  labelPlural: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
  active: PropTypes.number,
  handleSelect: PropTypes.func.isRequired,
}

export default DropDownSelect;