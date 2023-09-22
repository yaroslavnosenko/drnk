export interface Place {
  id: string
  longitude: number
  latitude: number
  hhFinish: string
}

export interface Merchant {
  id: string
  name: string
  image: string
  region: string
  distance: number
  type: string
  start_time: string
  end_time: string
  rating: number
}
