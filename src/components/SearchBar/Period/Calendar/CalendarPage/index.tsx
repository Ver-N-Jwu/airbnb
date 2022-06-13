import React from "react";

import DateItem from "@components/SearchBar/Period/Calendar/DateItem";
import { DAY_OF_WEEK } from "@constants/calendar";
import { getCalendarArray, getDate } from "@utils/calendar";

import { CalendarInfoType } from "_types/calendar";

import * as S from "./style";

const CalendarPage = ({ currDate }: { currDate: Date }) => {
  const currYear = currDate.getFullYear();
  const currMonth = currDate.getMonth();

  const calendarInfo = {
    calendarArray: getCalendarArray(currYear, currMonth),
    year: currYear,
    month: currMonth,
  };

  return (
    <S.CalendarPage>
      <h2>{`${currYear}년 ${currMonth + 1}월`}</h2>
      <S.CalendarContent>
        <CalendarDay />
        <CalendarDate calendarInfo={calendarInfo} />
      </S.CalendarContent>
    </S.CalendarPage>
  );
};

const CalendarDay = () => {
  return (
    <S.CalendarDay>
      {DAY_OF_WEEK.map((day, index) => (
        <S.DayItem key={day + index} day={day}>
          {day}
        </S.DayItem>
      ))}
    </S.CalendarDay>
  );
};

const CalendarDate = ({ calendarInfo }: { calendarInfo: CalendarInfoType }) => {
  const { calendarArray, year, month } = calendarInfo;

  return (
    <S.CalendarDate>
      {calendarArray.map((date: number, index) => {
        const currDate = getDate(year, month, date);
        return <DateItem currDate={currDate} date={date} key={currDate.getTime() + index} />;
      })}
    </S.CalendarDate>
  );
};

export default React.memo(CalendarPage);
