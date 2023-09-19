import { Header, TabBar } from '@/components'
import { Color } from '@/ui'
import { Tabs } from 'expo-router'
import { Home } from 'lucide-react-native'
import { View } from 'react-native'

export default function TabsLayout() {
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
      <View style={{ position: 'absolute', top: 0, width: '100%' }}>
        <Header />
      </View>
      <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <TabBar />
      </View>
    </View>
  )
}
