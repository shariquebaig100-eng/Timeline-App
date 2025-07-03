import React, { useState, useEffect, useRef } from 'react';
import { formatTime } from '../components/index';
import TimerDisplay from './TimerDisplay';
import Button from './Button';

export const LiveTimer = () => {
  const [time, setTime] = useState(0); // time in seconds
  const [running, setRunning] = useState(false);
  const [resetEnabled, setResetEnabled]=useState(false)
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!running) {
      setRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000); // update every second
    }
  };
  const stopTimer = () => { 
    setRunning(false);
    clearInterval(intervalRef.current);
    setResetEnabled(true)
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
    setResetEnabled(false)
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current); // cleanup on unmount
  }, []);


  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Live Timer</h1>
      <TimerDisplay timeFormatted={formatTime(time)} />
      <div className='flex gap-4'>
        <Button title="start" onClick={startTimer} disabled={running} className={`${!running ? " bg-red-600 justify-center hover:bg-red-700 transition" : "bg-red-900 cursor-not-allowed"} `} />
        <Button title="stop" onClick={stopTimer} disabled={!running} className={`${running ? "bg-green-600 hover:bg-green-700 transition" : "bg-green-900 cursor-not-allowed"}`} />
        <Button title="reset" onClick={resetTimer} disabled={!resetEnabled} className={`${  resetEnabled ? " bg-blue-600 hover:bg-blue-700  transition cursor-pointer" : "bg-blue-900 cursor-not-allowed"}`} />
      </div>
    </div>
  );
};