import { TabBar } from '@/components'
import { Tabs } from 'expo-router'
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
        <Tabs.Screen name="home" />
        <Tabs.Screen name="favorites" />
        <Tabs.Screen name="account" />
      </Tabs>
      <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <TabBar />
      </View>
    </View>
  )
}
