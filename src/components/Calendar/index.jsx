import { useCallback, useEffect, useRef, useState } from "react";

import NEXT_BUTTON from "@assets/nextButton.svg";
import PREV_BUTTON from "@assets/prevButton.svg";
import CalendarPage from "@components/Calendar/CalendarPage";
import Icon from "@components/common/Icon";
import { throttle } from "@utils/";
import { getDirectionValue } from "@utils/calendar";

import * as S from "./style";

const Calendar = () => {
  // pageIndex는 더 상위에서 관리해야 함. 초기화되면 안됨.
  const [pageIndex, setPageIndex] = useState(0);
  const [slideInfo, setSlideInfo] = useState({
    translateX: -50 + pageIndex * 50,
    direction: null,
  });

  const handleMoveCalendar = useCallback(
    throttle((movePoint, direction) => {
      setSlideInfo(({ translateX }) => ({ translateX: translateX + movePoint, direction: direction }));
      setPageIndex((prev) => prev + getDirectionValue(direction));
    }, 300),
    [slideInfo],
  );

  console.log(pageIndex);

  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDate = today.getDate();
  const getTodayDatePassByMonth = (passMonth) => new Date(todayYear, todayMonth + passMonth);

  let calendarYearMonthArr = [
    getTodayDatePassByMonth(-1),
    getTodayDatePassByMonth(0),
    getTodayDatePassByMonth(1),
    getTodayDatePassByMonth(2),
  ];

  const setIncreaseCalendarPage = (pageIndex) => {
    // pageIndex로 기준
    // 이전이나 다음 달력 눌렀을 때 1칸 더 뒤에 값이 없을 경우 pageIndex 기준으로
  };

  return (
    <S.Calendar>
      <Icon onClick={handleMoveCalendar.bind(null, 50, "FORWARD")} iconName={PREV_BUTTON} iconSize="small" />
      <S.SlideList translateX={slideInfo.translateX}>
        {calendarYearMonthArr.map((currDate) => (
          <CalendarPage key={currDate.getTime()} currDate={currDate} />
        ))}
      </S.SlideList>
      <Icon onClick={handleMoveCalendar.bind(null, -50, "BACKWARD")} iconName={NEXT_BUTTON} iconSize="small" />
    </S.Calendar>
  );
};

export default Calendar;
