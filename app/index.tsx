import { Redirect } from 'expo-router'
import * as Location from 'expo-location'
import { useEffect } from 'react'

export default function StartPage() {
  useEffect(() => {
    const locationRequest = async () => {
      await Location.requestForegroundPermissionsAsync()
    }
    locationRequest()
  }, [])
  return <Redirect href="/map" />
}
