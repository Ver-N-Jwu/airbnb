import { useState } from "react";
const 오늘날짜 = new Date();

type TodayType = typeof TODAYS;

const TODAYS = {
  today: 오늘날짜,
  todayYear: 오늘날짜.getFullYear(),
  todayMonth: 오늘날짜.getMonth(),
  todayDate: 오늘날짜.getDate(),
};

export const useToday = (): TodayType => {
  const [today] = useState(TODAYS.today);
  console.log("today", today);
  const { todayYear, todayMonth, todayDate } = TODAYS;
  return { today, todayYear, todayMonth, todayDate };
};
