import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 310px;
  margin: 0px 10px 0px 0px;
  border-radius: 3px;
  border: solid 1px steelblue;
  background: #ffffff;
  position: absolute;
  padding: 5px;
  z-index: 3;
`;

const Face = styled.img`
  margin: 0px 130px;
  width: 50px;
  height: 50px;
`;

const Leader = styled.div`
  font-family: 'Roboto Condensed';
  font-size: 15px;
  text-align: center;
  color: steelblue;
  border-bottom: solid 1px gold;
  padding: 0px 0px 2px 0px;
`;

const BonusName = styled.div`
  font-family: 'Roboto Condensed';
  font-size: 13px;
  text-align: center;
  color: steelblue;
  padding: 4px 0px 0px;
  background: #efefef;
`;

const BonusDesc = styled.div`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 11px;
  color: #525252;
  padding: 2px 4px 4px;
  background: #efefef;
  line-height: 14px;
`;

const Flag = styled.img`
  margin: 8px 135px 0px;
  width: 40px;
  height: 40px;
`;

const Nation = styled.div`
  font-family: 'Roboto Condensed';
  font-size: 15px;
  text-align: center;
  color: steelblue;
  border-bottom: solid 1px gold;
  padding: 0px 0px 2px 0px;
`;

const AbilityName = styled.div`
  font-family: 'Roboto Condensed';
  font-size: 13px;
  text-align: center;
  color: steelblue;
  padding: 4px 0px 0px;
  background: #efefef;
`;

const AbilityDesc = styled.div`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 11px;
  color: #525252;
  padding: 2px 4px 4px;
  background: #efefef;
`;

const Trait = styled.div`
  padding: 0px 0px 5px 0px;
  float: left;
  width: 100%;
  background: #efefef;
  min-height: 40px;
`;

const TraitName = styled.div`
  padding: 5px 5px 0px;
  background: #efefef;
  font-family: 'Roboto Condensed';
  font-size: 11px;
  color: steelblue;
`;

const TraitImg = styled.div`
  display: inline-block;
  float: left;
  width: 40px;
  height: 30px;
  margin: 2px 5px;
  background: #a9a9a9;
`;

const TraitDesc = styled.div`
  width: calc(100% - 50px);
  margin: 1px 0px 0px;
  display: inline-block;
  float: left;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 11px;
  color: #525252;
`;

class ToolTip extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    const { posX, posY, content } = this.props;

    const documentHeight = Math.max( 
                            document.body.scrollHeight, 
                            document.body.offsetHeight, 
                            document.documentElement.clientHeight, 
                            document.documentElement.scrollHeight, 
                            document.documentElement.offsetHeight);
    const verticalOffset = this.tooltip
                           ? (posY + this.tooltip.clientHeight/2 > documentHeight - 55
                              ? documentHeight - this.tooltip.clientHeight - 55
                              : posY - this.tooltip.clientHeight/2)
                           : 0;

    const wrapperStyle = {
      top: `${verticalOffset}px`,
      left: `${posX - 340}px`,
    };

    return (
      <Wrapper ref={ref => this.tooltip = ref} style={wrapperStyle}>
        <Face src={`https://s3.amazonaws.com/civ6-drafter/leaders/${content.leader.split(' ').join('_')}/headshot.png`} />
        <Leader>{content.leader}</Leader>
        <BonusName>{content.bonus_name}</BonusName>
        <BonusDesc dangerouslySetInnerHTML={{__html: content.bonus_desc}} />
        <Flag src={`https://s3.amazonaws.com/civ6-drafter/leaders/${content.leader.split(' ').join('_')}/${content.nation}.png`} />
        <Nation>{content.nation}</Nation>
        <AbilityName>{content.ability_name}</AbilityName>
        <AbilityDesc dangerouslySetInnerHTML={{__html: content.ability_desc}} />
        {
          content.traits.map((trait, i) => 
            <div key={`trait_${i}`}>
              <TraitName>{trait[2]}</TraitName>
              <Trait>
                <TraitImg />
                <TraitDesc dangerouslySetInnerHTML={{__html: trait[3]}} />
              </Trait>
            </div>
          )
        }
      </Wrapper>
    )

  }
}

ToolTip.propTypes = {
  posX: PropTypes.number,
  posY: PropTypes.number,
  content: PropTypes.shape({
    _id: PropTypes.string,
    id: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    dlc_id: PropTypes.number.isRequired,
    leader: PropTypes.string.isRequired,
    bonus_name: PropTypes.string.isRequired,
    bonus_desc: PropTypes.string.isRequired,
    nation: PropTypes.string.isRequired,
    ability_name: PropTypes.string.isRequired,
    ability_desc: PropTypes.string.isRequired,
    traits: PropTypes.arrayOf(PropTypes.any).isRequired,
  }),
};

export default ToolTip;