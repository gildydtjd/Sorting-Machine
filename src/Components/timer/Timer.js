import React, { useEffect, useState } from "react";
import { KorWeek, EngWeek, EngMonth } from "./constant";
import { containerStyle, divStyle } from "./style";

function Timer({ Language }) {
  const [time, setTime] = useState(new Date());

  const TimeChange = () => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  };

  function getDayOfWeek(Language) {
    if (Language) {
      return EngWeek[new Date().getDay()];
    } else {
      return KorWeek[new Date().getDay()];
    }
  }

  function getEngMonth() {
    return EngMonth[new Date().getMonth()];
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
    TimeChange();
  }, []);

  return (
    <div style={containerStyle}>
      {Language ? (
        <div style={divStyle}>
          <span>{time.getHours()}h</span> <span>{time.getMinutes()}m</span>
          <span>{time.getSeconds()}s</span>
          <span>{getEngMonth()}</span>
          <span>{getDayOfWeek(Language)}</span> <span>{time.getDate()}</span>{" "}
          <span>{time.getFullYear()}</span>
        </div>
      ) : (
        <div style={divStyle}>
          <span>{time.getFullYear()}년</span>
          <span>{time.getMonth() + 1}월</span>
          <span>{time.getDate()}일</span>
          <span>{getDayOfWeek(Language)}</span>
          <span>{time.getHours()}시</span> <span>{time.getMinutes()}분</span>
          <span>{time.getSeconds()}초</span>
        </div>
      )}
    </div>
  );
}
export default Timer;
