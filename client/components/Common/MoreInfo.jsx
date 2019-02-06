import React from 'react';
import styled from 'styled-components';



class MoreInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { active, textContent, handleHover } = this.props;

    return (
      <button>
        {
          active
          ? <div>hi</div>
          : <div />
        }
      </button>
    )
  }
}

export default MoreInfo;