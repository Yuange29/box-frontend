import { useState, useEffect } from "react";
import styled from "styled-components";

const DAYS = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const day = DAYS[time.getDay()];

  return (
    <Wrapper>
      <TimeRow>
        <HourMinute>
          {hours}:{minutes}
        </HourMinute>
      </TimeRow>
      <DayText>---{day}---</DayText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  border-radius: 4px;
  color: var(--text-primary);
  padding: 40px 0px;
  margin: 0 auto;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const TimeRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0;
`;

const HourMinute = styled.span`
  font-size: 72px;
  font-weight: 600;
  letter-spacing: 4px;
  line-height: 1;
`;

const DayText = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
`;
