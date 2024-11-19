import { useState } from "react";
import { useTimerStore } from "./useTimerStore";

export const TimerStore = () => {
  const [time, setTime] = useState({ hrs: 0, mins: 1, secs: 0 });
  const addTimer = useTimerStore((s) => s.addTimer);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTime((curr) => ({
      ...curr,
      [name]: formatTimeValue(value, name === "hrs" ? 23 : 59),
    }));
  };

  const handleAddTimer = () => {
    const ms = time.hrs * 3600000 + time.mins * 60000 + time.secs * 1000;
    if (ms < 10000) {
      alert("Timer must be at least 10 seconds");
      return;
    }
    addTimer(ms);
  };

  return (
    <div className="flex flex-col gap-4 mx-auto w-fit ">
      <div className="flex items-center justify-between">
        {["Hr", "Min", "Sec"].map((label) => (
          <p key={label} className="w-full font-bold text-center">
            {label}
          </p>
        ))}
      </div>
      <div className="flex items-center p-2 border rounded-md border-neutral bg-base-200">
        <InputField
          value={String(time.hrs).padStart(2, "0")}
          onChange={handleChange}
          name="hrs"
        />
        <p className="text-lg">:</p>
        <InputField
          value={String(time.mins).padStart(2, "0")}
          onChange={handleChange}
          name="mins"
        />
        <p className="text-lg">:</p>
        <InputField
          value={String(time.secs).padStart(2, "0")}
          onChange={handleChange}
          name="secs"
        />
      </div>
      <div className="flex items-end justify-center">
        <button
          className="text-lg btn btn-success"
          onClick={() => handleAddTimer()}
        >
          Add Timer
        </button>
      </div>
    </div>
  );
};

const InputField = (props) => {
  return (
    <input
      {...props}
      className="w-20 h-24 text-5xl text-center rounded-md bg-base-200 focus:bg-accent focus:text-accent-content focus:outline-none"
    />
  );
};
const formatTimeValue = (value, maxValue) => {
  const intValue = parseInt(value, 10);

  if (isNaN(intValue)) return 0;
  const mValue = Number(intValue.toString().slice(-2));
  return Math.min(mValue, maxValue);
};
