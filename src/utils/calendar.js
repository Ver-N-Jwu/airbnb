// 달의 첫번째 날의 요일 구하기
export const getFirstDay = (year, month) => {
  const firstDay = new Date(year, month, 0).getDay() + 1;
  return firstDay === 7 ? 0 : firstDay;
};

// 달의 마지막 날 구하기
export const getLastDate = (year, month) => {
  const lastDate = new Date(year, month + 1, 0).getDate();
  return lastDate;
};

// 달력 배열 만들기
export const getCalendarArray = (year, month) => {
  const firstDay = getFirstDay(year, month);
  const lastDate = getLastDate(year, month);

  const calendarArray = Array.from({ length: lastDate + firstDay }, (_, index) => {
    return index < firstDay ? 0 : index - firstDay + 1;
  });
  return calendarArray;
};

// 방향에 따른 페이지 옮기기
export const getDirectionValue = (direction) => {
  switch (direction) {
    case "FORWARD":
      return -1;
    case "BACKWARD":
      return +1;
    default:
      throw Error("invalid direction ");
  }
};
