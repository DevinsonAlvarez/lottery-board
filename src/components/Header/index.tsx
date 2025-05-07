import { useEffect, useState } from "react";
import dayjs from "../../lib/dayjs";
import "./styles.css";

const TIME_FORMAT = "hh:mm a";
const DATE_FORMAT = "LL";

export default function Header() {
  const [time, setTime] = useState(dayjs().format(TIME_FORMAT));
  const [date, setDate] = useState(dayjs().format(DATE_FORMAT));

  useEffect(() => {
    const interval = setInterval(() => {
      const now = dayjs();

      setTime(now.format(TIME_FORMAT));
      setDate(now.format(DATE_FORMAT));
    }, 60000);

    return () => clearInterval(interval);
  });

  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="header-item header-logo">
          <img src="logo.webp" alt="resultados147" height="32px" />
        </div>
        <div className="header-item header-date">{date}</div>
        <div className="header-item header-time">{time}</div>
      </div>
    </div>
  );
}
