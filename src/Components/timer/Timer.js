import React, { useEffect, useState } from 'react';

function Timer({ Language }) {
  const [time, setTime] = useState(new Date());
  const [dayOfWeek, setDayOfWeek] = useState('');

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

  useEffect(() => {
    if (Language) {
      getEnglishDate();
    } else {
      getKoreanDate();
    }
    TimeChange();
  }, [Language]);

  return (
    <div>
      {time.getFullYear()}년 {time.getMonth() + 1}월 {time.getDate()}일{' '}
      {dayOfWeek} {time.getHours()}시 {time.getMinutes()}분 {time.getSeconds()}
      초
    </div>
  );
}

export default Timer;
