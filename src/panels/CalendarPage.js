import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Div, Calendar, PanelHeaderBack, Text, Button} from '@vkontakte/vkui';
import 'react-calendar/dist/Calendar.css';
import './CalendarPage.css';

const CalendarPage = ({ id, go, onDateSelect, noteForDate }) => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    onDateSelect(newDate); // Передаем выбранную дату обратно в родительский компонент
  };

  return (
    <React.Fragment>
      <Panel id={id} className='calenda'>
        <PanelHeader before={<PanelHeaderBack onClick={go} data-to="page1" />}>Календарь</PanelHeader>
        <Div className="pageCalendar">
          <Div className='calendarr'>
            <Calendar onChange={handleDateChange} value={date} />
          </Div>
          {noteForDate && <Div className='note'><Text>{`${noteForDate}`}</Text></Div>}
          <Button className='button' size="l" onClick={go} data-to="statistics">Статистика</Button>
        </Div>
      </Panel>
    </React.Fragment>
  );
};
CalendarPage.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  onDateSelect: PropTypes.func.isRequired,
};
export default CalendarPage;