import { useState, useEffect, useCallback } from 'react'
import { isAfter, differenceInCalendarDays, differenceInDays } from 'date-fns'

export const useCountDown = (untilDate, resolution = 60000) => {
  const timestamp = untilDate.getTime()
  const [diff, setDiff] = useState({ days: 0, hours: 0 })

  const updateDiff = useCallback(() => {
    setDiff(calculateDiffUntil(timestamp))
  }, [timestamp])

  useEffect(() => {
    updateDiff()
    const interval = setInterval(() => {
      updateDiff()
    }, resolution)
    return () => clearInterval(interval)
  }, [updateDiff, resolution])

  if (isAfter(new Date(), new Date(timestamp))) {
    return [0, 0]
  }

  return [diff.days, diff.hours]
}

const calculateDiffUntil = timestamp => {
  const now = new Date()
  const until = new Date(timestamp)
  const calendarDays = differenceInCalendarDays(until, now)
  const days = differenceInDays(until, now)
  let hours
  if (calendarDays === days) {
    hours = until.getHours() - new Date().getHours()
  } else {
    hours = 24 - (new Date().getHours() - until.getHours())
  }
  return { days, hours }
}
