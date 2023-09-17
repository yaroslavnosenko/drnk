import { Redirect, useRootNavigationState } from 'expo-router'
import * as Location from 'expo-location'
import { useEffect } from 'react'

export default function HomeScreen() {
  useEffect(() => {
    const locationRequest = async () => {
      await Location.requestForegroundPermissionsAsync()
    }
    locationRequest()
  }, [])
  const rootNavigationState = useRootNavigationState()
  if (!rootNavigationState?.key) return null
  return <Redirect href={'/map'} />
}
