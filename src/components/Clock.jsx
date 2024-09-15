import React, { useState, useEffect } from 'react';

const timeZones = {
  Tokyo: 'Asia/Tokyo',
  Beijing: 'Asia/Shanghai',
  Delhi: 'Asia/Kolkata',
  Moscow: 'Europe/Moscow',
  Sydney: 'Australia/Sydney',
  NewYork: 'America/New_York',
  Paris: 'Europe/Paris',
  London: 'Europe/London',
  Auckland: 'Pacific/Auckland'
};

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [timeZone, setTimeZone] = useState('UTC');

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = new Date();
      setTime(newTime);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleTimeZoneChange = (zone) => {
    setTimeZone(timeZones[zone]);
  };

  const formatTime = (date) => {
    const options = { timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  return (
    <div className="clock">
      <div className="clock-time">
        {formatTime(time)}
      </div>
      <div className="clock-controls">
        {Object.keys(timeZones).map((zone, index) => (
          <button
            key={index}
            className={`clock-button ${zone.toLowerCase()}`}
            onClick={() => handleTimeZoneChange(zone)}
          >
            {zone}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Clock;
