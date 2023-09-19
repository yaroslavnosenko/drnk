import * as Location from 'expo-location'
import { Redirect, useRootNavigationState } from 'expo-router'
import { useEffect } from 'react'

export default function InitScreen() {
  useEffect(() => {
    const locationRequest = async () => {
      await Location.requestForegroundPermissionsAsync()
    }
    locationRequest()
  }, [])

  const rootNavigationState = useRootNavigationState()
  if (!rootNavigationState?.key) return null
  return <Redirect href={'/home'} />
}
