import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack, Div, Text, Group, Cell, Button } from '@vkontakte/vkui';

import './Statistics.css';
import ball from '../img/ball.svg';
import smile1 from '../img/smile1.svg';
import smile2 from '../img/smile2.svg';
import smile3 from '../img/smile3.svg';
import smile4 from '../img/smile4.svg';
import smile5 from '../img/smile5.svg';
import smile6 from '../img/smile6.svg';
import smile7 from '../img/smile7.svg';
import arrow from '../img/arrow.svg';

const Statistics = ({ id, go }) => {
    const data = [
        { imagePath: smile1, text: '0%' },
        { imagePath: smile2, text: '0%' },
        { imagePath: smile3, text: '0%' },
        { imagePath: smile4, text: '0%' },
        { imagePath: smile5, text: '0%' },
        { imagePath: smile6, text: '0%' },
        { imagePath: smile7, text: '0%' },
        
      ];
    return (
      <Panel id={id}>
        <PanelHeader before={<PanelHeaderBack onClick={go} data-to="calendarPage" />}>Статистика</PanelHeader>
        <Div className='stat'>
          <Text weight="1" className='text'>За месяц</Text>
          <Text weight="1" className='text'>1/12/23-31/12/23</Text>
            <Div>
                <a onClick={go} data-to="statistics">
                <img src={arrow}></img>
                </a>
            </Div>
          <img src={ball} className='img'></img>
          <Div style={{ background: 'white', borderRadius: '20px', marginTop:'20px' }}> 
            <Group> 
                {data.map((item, index) => ( 
                <Cell 
                    key={index} 
                    before={<img src={item.imagePath} alt={`${index + 1}`} style={{ width: '40px', height: '40px' }} />} 
                >
                     <Div style={{ marginLeft: '4px' }}>0%</Div>
                </Cell>
                ))}
            </Group> 
          </Div> 
        </Div>
      </Panel>
    );
  };

Statistics.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Statistics;