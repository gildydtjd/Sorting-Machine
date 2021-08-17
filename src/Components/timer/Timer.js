import React, { useEffect, useState } from 'react';
import './timer.css';
function Timer({ Language }) {
  const [time, setTime] = useState(new Date());
  const [dayOfWeek, setDayOfWeek] = useState('');
  const [EnglishMonth, setEnglishMonth] = useState('');

  const TimeChange = () => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  };

  function getKoreanDate() {
    var week = [
      '일요일',
      '월요일',
      '화요일',
      '수요일',
      '목요일',
      '금요일',
      '토요일',
    ];
    setDayOfWeek(week[new Date().getDay()]);
  }

  function getEnglishDate() {
    var week = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    setDayOfWeek(week[new Date().getDay()]);
  }

  function getEnglishMonth() {
    var month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    setEnglishMonth(month[new Date().getMonth()]);
  }

  useEffect(() => {
    if (Language) {
      getEnglishDate();
      getEnglishMonth();
    } else {
      getKoreanDate();
    }
    TimeChange();
  }, [Language]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '30px',
      }}
    >
      {Language ? (
        <div
          style={{ width: '25%', padding: '20px', border: '1px solid #c9c9c9' }}
        >
          <span>{time.getHours()}h</span> <span>{time.getMinutes()}m</span>
          <span>{time.getSeconds()}s</span>
          <span>{EnglishMonth}</span>
          <span>{dayOfWeek}</span> <span>{time.getDate()}</span>{' '}
          <span>{time.getFullYear()}</span>
        </div>
      ) : (
        <div
          style={{ width: '25%', padding: '20px', border: '1px solid #c9c9c9' }}
        >
          <span>{time.getFullYear()}년</span>
          <span>{time.getMonth() + 1}월</span>
          <span>{time.getDate()}일</span>
          <span>{dayOfWeek}</span>
          <span>{time.getHours()}시</span> <span>{time.getMinutes()}분</span>
          <span>{time.getSeconds()}초</span>
        </div>
      )}
    </div>
  );
}

export default Timer;
