import { Toolbar, TabBar } from '@/components'
import { Tabs, usePathname } from 'expo-router'
import { View } from 'react-native'

export default function TabsLayout() {
  const path = usePathname()
  const isToolbarHidden = path.includes('account')
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            display: 'none',
          },
        }}
      >
        <Tabs.Screen name="home" options={{ title: 'Home' }} />
        <Tabs.Screen name="map" options={{ title: 'Map' }} />
        <Tabs.Screen name="account" options={{ title: 'Account' }} />
      </Tabs>
      <View
        style={{
          position: 'absolute',
          top: 0,
          width: '100%',
          display: isToolbarHidden ? 'none' : 'flex',
        }}
      >
        <Toolbar />
      </View>
      <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <TabBar />
      </View>
    </View>
  )
}
