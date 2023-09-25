import { Map, MerchantList, Toolbar } from '@/components'
import { useLayerLayout } from '@/hooks'
import { merchantMock, placesMock } from '@/mocks'
import { Color } from '@/ui'
import { BlurView } from 'expo-blur'
import { Animated, ScrollView, View } from 'react-native'

export default function HomeTab() {
  const { panHandlers, onScroll, layerStyle } = useLayerLayout({
    positions: { top: 0, middle: 196, bottom: 640 },
  })
  return (
    <View style={{ flex: 1 }}>
      <Map places={placesMock} />
      <Animated.View style={[layerStyle]} {...panHandlers}>
        <BlurView
          style={{
            backgroundColor: Color.WYT + 'CC',
            overflow: 'hidden',
            borderTopRightRadius: 16,
            borderTopLeftRadius: 16,
          }}
        >
          <ScrollView
            style={{ paddingTop: 32 }}
            scrollEventThrottle={16}
            onScroll={onScroll}
            showsVerticalScrollIndicator={false}
          >
            <MerchantList merhcants={merchantMock} />
          </ScrollView>
        </BlurView>
      </Animated.View>
      <Toolbar />
    </View>
  )
}
