"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  className?: string
}

export function CountdownTimer({ className }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 }
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 }
        } else if (prevTime.hours > 0) {
          return { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 }
        } else if (prevTime.days > 0) {
          return { ...prevTime, days: prevTime.days - 1, hours: 23, minutes: 59, seconds: 59 }
        } else {
          clearInterval(timer)
          return prevTime
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className={`flex flex-wrap justify-center gap-3 md:gap-4 ${className}`}>
      <div className="flex flex-col items-center">
        <div className="bg-zinc-800 text-amber-500 text-2xl sm:text-3xl md:text-4xl font-bold w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 rounded-lg flex items-center justify-center shadow-lg border border-amber-500/20">
          {timeLeft.days}
        </div>
        <span className="text-xs text-slate-400 mt-1">DIAS</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-zinc-800 text-amber-500 text-2xl sm:text-3xl md:text-4xl font-bold w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 rounded-lg flex items-center justify-center shadow-lg border border-amber-500/20">
          {timeLeft.hours.toString().padStart(2, "0")}
        </div>
        <span className="text-xs text-slate-400 mt-1">HORAS</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-zinc-800 text-amber-500 text-2xl sm:text-3xl md:text-4xl font-bold w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 rounded-lg flex items-center justify-center shadow-lg border border-amber-500/20">
          {timeLeft.minutes.toString().padStart(2, "0")}
        </div>
        <span className="text-xs text-slate-400 mt-1">MINUTOS</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-zinc-800 text-amber-500 text-2xl sm:text-3xl md:text-4xl font-bold w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 rounded-lg flex items-center justify-center shadow-lg border border-amber-500/20">
          {timeLeft.seconds.toString().padStart(2, "0")}
        </div>
        <span className="text-xs text-slate-400 mt-1">SEGUNDOS</span>
      </div>
    </div>
  )
}
