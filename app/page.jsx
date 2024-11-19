"use client";

import { useShallow } from "zustand/react/shallow";
import { Timer } from "./Timer";
import { TimerStore } from "./TimerStore";
import { useTimerInterval, useTimerStore } from "./useTimerStore";

export default function Home() {
  useTimerInterval();
  return (
    <main className="flex flex-col max-w-4xl min-h-full gap-8 p-4 mx-auto">
      <div className="px-4 py-2 mx-auto text-6xl font-bold rounded-md w-fit bg-base-200 text-base-content">
        Timer
      </div>
      <TimerStore />
      <Timers />
    </main>
  );
}

const Timers = () => {
  const timers = useTimerStore(useShallow((s) => s.timers.map((t) => t.id)));
  return (
    <div className="flex flex-wrap gap-4">
      {timers.map((timerId) => (
        <Timer key={timerId} id={timerId} />
      ))}
    </div>
  );
};
