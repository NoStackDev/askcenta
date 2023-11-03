"use client";

import React from "react";

export default function useCountdown(countDownDuration: number) {
  const [setIntervalId, setSetIntervalId] =
    React.useState<NodeJS.Timeout | null>(null);
  const [countDownState, setCountDownState] = React.useState<
    "ongoing" | "completed" | "restart"
  >("ongoing");
  const [countDownDate, setCountDownDate] = React.useState(
    new Date(Date.now() + countDownDuration).getTime()
  );

  const [countDown, setCountDown] = React.useState(
    countDownDate - new Date().getTime()
  );

  React.useEffect(() => {
    if (countDownState === "restart") {
      setCountDownDate(new Date(Date.now() + countDownDuration).getTime());
      setCountDownState("ongoing");
    }
  }, [countDownState]);

  React.useEffect(() => {
    if (setIntervalId && countDown <= 1) {
      clearInterval(setIntervalId);
      setCountDown(0);
      setSetIntervalId(null);
      setCountDownState("completed");
    }
  }, [countDown]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);
    setSetIntervalId(interval);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return {
    countDownState,
    setCountDownState,
    countDownValues: getReturnValues(countDown),
  };
}

const getReturnValues = (countDown: number) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};
