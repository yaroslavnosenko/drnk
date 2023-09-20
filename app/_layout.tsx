import { Stack } from 'expo-router'
import {
  useFonts,
  Outfit_400Regular,
  Outfit_500Medium,
  Outfit_700Bold,
} from '@expo-google-fonts/outfit'

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_700Bold,
  })

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="filter" options={{ presentation: 'modal' }} />
    </Stack>
  )
}
