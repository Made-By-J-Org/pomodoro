/* eslint-disable @typescript-eslint/ban-ts-comment */
const STORAGE_KEY = 'TIMERS_LIST'


// @ts-ignore
export const readLSTimersList = () => {
  let timersList = localStorage.getItem(STORAGE_KEY)

  if(timersList) {
    timersList = JSON.parse(timersList)
  }
  else {
    localStorage.setItem(STORAGE_KEY, '[]')
  }

  return timersList ?? []
}
export const setLSTimersList = (timersList: Array<unknown>) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(timersList))
}