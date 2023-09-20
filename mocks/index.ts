import { Merchant, Place } from '../types'

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

export const merchantMock: Merchant[] = [
  {
    id: '1',
    created_at: 'string',
    google_place_id: 'id',
    google_place_url: null,
    google_price_level: null,
    google_rating: null,
    google_user_ratings_total: null,
    latitude: 1,
    longitude: 2,
    name: 'Bar',
    profile_id: '1',
    updated_at: 'updated',
  },
]
