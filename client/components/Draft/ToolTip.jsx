import React from 'react';
import styled from 'styled-components';

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

const Carat = styled.span`
  width: 0; 
  height: 0; 
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid #ffffff;
  position: absolute;
  top: 295px;
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


const ToolTip = ({posX, posY, content}) => (
  <Wrapper style={{top: `${posY - 300}px`, left: `${posX - 340}px`}}>
    <Carat style={{borderLeft:'solid 10px steelblue',left:'320px'}}/>
    <Carat style={{left:'318.5px'}}/>
    <Face src={`https://s3.amazonaws.com/civ6-drafter/leaders/${content.leader.split(' ').join('_')}/headshot.png`} />
    <Leader>{content.leader}</Leader>
    <BonusName>{content.bonus_name}</BonusName>
    <BonusDesc dangerouslySetInnerHTML={{__html: content.bonus_desc}} />
    <Flag src={`https://s3.amazonaws.com/civ6-drafter/leaders/${content.leader.split(' ').join('_')}/civflag.png`} />
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
);

export default ToolTip;