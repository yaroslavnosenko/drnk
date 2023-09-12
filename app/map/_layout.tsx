import { Stack } from 'expo-router'
import { GluestackUIProvider, config } from '@gluestack-ui/themed'

export default function Layout() {
  return (
    <GluestackUIProvider config={config.theme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen
          name="results"
          options={{
            presentation: 'modal',
          }}
        />
      </Stack>
    </GluestackUIProvider>
  )
}
