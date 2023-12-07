import React, {useState} from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Text } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import smile1 from '../img/smile1.svg';
import smile2 from '../img/smile2.svg';
import smile3 from '../img/smile3.svg';
import smile4 from '../img/smile4.svg';
import smile5 from '../img/smile5.svg';
import smile6 from '../img/smile6.svg';
import smile7 from '../img/smile7.svg';

import './Home.css';

const Home = ({ id, go, fetchedUser, setSelectedSmile }) => {
    // Получить текущую дату и месяц
    const [selectedSmileIndex, setSelectedSmileIndex] = useState(null);

    const smileTexts = [
      "Злой",
      "Веселый",
      "Нервный",
      "Подавленный",
      "Радостный",
      "Влюбленный",
      "Грустный",
    ];

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = getGenitiveMonth(currentDate.getMonth());
  
    // Функция для получения месяца в родительном падеже
    function getGenitiveMonth(monthNumber) {
      const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
      ];
      return months[monthNumber];

    }
    const smileImages = [smile1, smile2, smile3, smile4, smile5, smile6, smile7];
    const handleSmileClick = (index, e) => {
      const selectedSmileData = {
        index: index,
        text: smileTexts[index],
      };
      setSelectedSmileIndex(index);
      setSelectedSmile(selectedSmileData);
      go && go(e);
    };
    return (
      <Panel id={id}>
        <PanelHeader>{`${day} ${month}`}</PanelHeader>
        <Div className="circular-buttons">
          
          {smileImages.map((smile, index) => (
          <img
            key={index}
            className="Smile"
            src={smile}
            onClick={(e) => handleSmileClick(index, e)}
            alt={`Button ${index + 1}`}
            id={`smile-${index + 1}`}
            data-to={`page1`}
            style={{
              position: 'fixed',
              top: '280px',
              left: '150px',
              
              transform: `rotate(${(360 / smileImages.length) * index}deg) translate(120px) rotate(${-(360 / smileImages.length) * index}deg)`
            }}

          />
        ))}
          <Div className="center-text" ><Text weight="1"  style={{position: 'fixed', top: '318px', left:'130px', fontSize:'20px', textShadow: '1px 1px 5px gray'}}>Как твой день?</Text> </Div>
        </Div>
      </Panel>
    );
  };
  
Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

export default Home;