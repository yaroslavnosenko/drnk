import { Place } from '../types'

const latitude = 40.75
const longitude = -73.99
const max = 9
const min = 7

export const placesMock: Place[] = Array.from(Array(18).keys()).map((id) => ({
  id: String(id),
  latitude: latitude + Math.random() * 0.015,
  longitude: longitude + Math.random() * 0.015,
  hhFinish: Math.floor(Math.random() * (max - min + 1)) + min + ' PM',
}))
