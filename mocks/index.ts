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
    name: 'Sagaponack in Flatiron District',
    type: 'Cocktail bar',
    distance: 0.5,
    image:
      'https://www.travelandleisure.com/thmb/Jw-KKDrA6z1nvDJbr5kyKJSG4vk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-header-oiji-mi-NEWNYCDINE0223-8c392080598d44dbafdbc87bbcf4d7dd.jpg',
    region: 'East Village',
    start_time: '4 PM',
    end_time: '6 PM',
    rating: 4.7,
  },
  {
    id: '2',
    name: 'Thai Villa',
    type: 'Cocktail bar',
    distance: 0.6,
    image: 'https://media.timeout.com/images/105846896/image.jpg',
    region: 'East Village',
    start_time: '5 PM',
    end_time: '7 PM',
    rating: 3.4,
  },
  {
    id: '3',
    name: 'Sagaponack in Flatiron District',
    type: 'Cocktail bar',
    distance: 0.5,
    image:
      'https://www.travelandleisure.com/thmb/Jw-KKDrA6z1nvDJbr5kyKJSG4vk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-header-oiji-mi-NEWNYCDINE0223-8c392080598d44dbafdbc87bbcf4d7dd.jpg',
    region: 'East Village',
    start_time: '4 PM',
    end_time: '6 PM',
    rating: 4.7,
  },
  {
    id: '4',
    name: 'Thai Villa',
    type: 'Cocktail bar',
    distance: 0.6,
    image: 'https://media.timeout.com/images/105846896/image.jpg',
    region: 'East Village',
    start_time: '5 PM',
    end_time: '7 PM',
    rating: 3.4,
  },
  {
    id: '5',
    name: 'Sagaponack in Flatiron District',
    type: 'Cocktail bar',
    distance: 0.5,
    image:
      'https://www.travelandleisure.com/thmb/Jw-KKDrA6z1nvDJbr5kyKJSG4vk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-header-oiji-mi-NEWNYCDINE0223-8c392080598d44dbafdbc87bbcf4d7dd.jpg',
    region: 'East Village',
    start_time: '4 PM',
    end_time: '6 PM',
    rating: 4.7,
  },
  {
    id: '6',
    name: 'Thai Villa',
    type: 'Cocktail bar',
    distance: 0.6,
    image: 'https://media.timeout.com/images/105846896/image.jpg',
    region: 'East Village',
    start_time: '5 PM',
    end_time: '7 PM',
    rating: 3.4,
  },
  {
    id: '7',
    name: 'Sagaponack in Flatiron District',
    type: 'Cocktail bar',
    distance: 0.5,
    image:
      'https://www.travelandleisure.com/thmb/Jw-KKDrA6z1nvDJbr5kyKJSG4vk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-header-oiji-mi-NEWNYCDINE0223-8c392080598d44dbafdbc87bbcf4d7dd.jpg',
    region: 'East Village',
    start_time: '4 PM',
    end_time: '6 PM',
    rating: 4.7,
  },
  {
    id: '8',
    name: 'Thai Villa',
    type: 'Cocktail bar',
    distance: 0.6,
    image: 'https://media.timeout.com/images/105846896/image.jpg',
    region: 'East Village',
    start_time: '5 PM',
    end_time: '7 PM',
    rating: 3.4,
  },
]
