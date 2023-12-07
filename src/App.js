import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Page1 from './panels/Page1';
import CalendarPage from './panels/CalendarPage';
import Statistics from './panels/Statistics';
import Statistics2 from './panels/Statistics2';

const App = () => {
  const [activePanel, setActivePanel] = useState('home');
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);
  const [selectedSmile, setSelectedSmile] = useState();
  const [selectedDate, setSelectedDate] = useState(null); 
  const [noteForDate, setNoteForDate] = useState('');

  useEffect(() => {
    async function fetchData() {
      const user = await bridge.send('VKWebAppGetUserInfo');
      setUser(user);
      setPopout(null);
    }
    fetchData();
  }, []);

  const go = (e) => {
    setActivePanel(e.currentTarget.dataset.to);
  };
  const handleDateSelect = (newDate) => {
    setSelectedDate(newDate);
  };

  return (
    <SplitLayout popout={popout}>
      <SplitCol>
        <View activePanel={activePanel}>
          <Home id="home" fetchedUser={fetchedUser} go={go} setSelectedSmile={setSelectedSmile}/>
          <Persik id="persik" go={go} />
          <Page1 id="page1" go={go} setActivePanel={setActivePanel} selectedSmile={selectedSmile} setNoteForDate={setNoteForDate}/>
          <CalendarPage id="calendarPage" go={go} onDateSelect={handleDateSelect} noteForDate={noteForDate}/>
          <Statistics id="statistics" go={go}/>
          <Statistics2 id="statistics2" go={go}/>
        </View>
      </SplitCol>
    </SplitLayout>
  );
};

export default App;
