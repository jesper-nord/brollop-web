import { useState, useEffect, useCallback } from 'react'
import { isAfter, differenceInMilliseconds } from 'date-fns'

export const useCountDown = (untilDate, resolution = 20000) => {
  const [diff, setDiff] = useState({ days: 0, hours: 0, minutes: 0 })

  const updateDiff = useCallback(() => {
    setDiff(millisecondsToDays(differenceInMilliseconds(untilDate, new Date())))
  }, [untilDate])

  useEffect(() => {
    updateDiff()
    const interval = setInterval(() => {
      updateDiff()
    }, resolution)
    return () => clearInterval(interval)
  }, [updateDiff, resolution])

  if (isAfter(new Date(), untilDate)) {
    return [0, 0, 0]
  }

  return [diff.days, diff.hours, diff.minutes]
}

const dayMs = 24 * 60 * 60 * 1000
const hourMs = 60 * 60 * 1000

const millisecondsToDays = ms => {
  let days = Math.floor(ms / dayMs)
  let hours = Math.floor((ms - days * dayMs) / hourMs)
  let minutes = Math.round((ms - days * dayMs - hours * hourMs) / 60000)
  if (minutes === 60) {
    hours++
    minutes = 0
  }
  if (hours === 24) {
    days++
    hours = 0
  }
  return { days, hours, minutes }
}
