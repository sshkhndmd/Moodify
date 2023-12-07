import React, {useState, useRef, useEffect, useImperativeHandle} from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Div, Text, PanelHeaderBack, Textarea, Button } from '@vkontakte/vkui';
import smile1 from '../img/smile1.svg';
import smile2 from '../img/smile2.svg';
import smile3 from '../img/smile3.svg';
import smile4 from '../img/smile4.svg';
import smile5 from '../img/smile5.svg';
import smile6 from '../img/smile6.svg';
import smile7 from '../img/smile7.svg';
import './Page1.css';
const smileImages = [smile1, smile2, smile3, smile4, smile5, smile6, smile7];
const currentDate = new Date();
    const day = currentDate.getDate();
    const month = getGenitiveMonth(currentDate.getMonth());
  
    
    function getGenitiveMonth(monthNumber) {
      const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
      ];
      return months[monthNumber];
    }

    const Page1 = React.forwardRef(({ id, selectedSmile, setActivePanel, go, setNoteForDate }, ref) => {
      const [note, setNote] = useState('');
      const textareaRef = useRef(null);
    
      useEffect(() => {
        if (textareaRef.current) {
          textareaRef.current.style.height = 'auto';
          const newHeight = `${textareaRef.current.scrollHeight}px`;
          textareaRef.current.style.height = newHeight;
        }
      }, [note]);
    
      const handleNoteChange = (e) => {
        setNote(e.target.value);
      };
    
      const handleSaveNote = () => {
        const noteData = { note };
        setNoteForDate(noteData.note);
        setActivePanel('calendarPage');
        setNote('');
      };
    
      useImperativeHandle(ref, () => ({
        focusTextarea: () => {
          textareaRef.current.focus();
        },
      }));
    
      return (
        <React.Fragment>
          <Panel id={id}>
            <PanelHeader before={<PanelHeaderBack onClick={go} data-to="home" />}>{`${day} ${month}`}</PanelHeader>
          </Panel>
          <Panel id={id}>
            <Div className="pageOne">
              <Div className="image-container">
                <img src={smileImages[selectedSmile.index]} alt={`смайлик ${selectedSmile.index + 1}`} />
              </Div>
              <Text weight="1" className="textPage">{selectedSmile.text}</Text>
              <Textarea
                value={note}
                onChange={handleNoteChange}
                placeholder="Напишите заметку"
                style={{ marginTop: '10px', height: 'auto', resize: 'none', width: '250px', border: 'none', outline: 'none' }}
                ref={textareaRef}
              />
              <Button size="l" style={{ marginTop: '10px' }} onClick={handleSaveNote}>Сохранить</Button>
            </Div>
          </Panel>
        </React.Fragment>
      );
    });
    
    Page1.propTypes = {
      id: PropTypes.string.isRequired,
      go: PropTypes.func.isRequired,
      setNoteForDate: PropTypes.func.isRequired, 
    };
    
    export default Page1;