import { Map, MerchantList, Toolbar } from '@/components'
import { useLayerLayout } from '@/hooks'
import { merchantMock, placesMock } from '@/mocks'
import { Color, TabBarHeight } from '@/ui'
import { BlurView } from 'expo-blur'
import { Animated, ScrollView, View, Dimensions } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function HomeTab() {
  const { top, bottom } = useSafeAreaInsets()
  const screenH = Dimensions.get('window').height

  const positions = { top: 0, middle: top + 192, bottom: screenH }

  const { panHandlers, onScroll, layerStyle } = useLayerLayout({
    positions,
    offset: 54,
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
            scrollEventThrottle={16}
            onScroll={onScroll}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingTop: 32,
              paddingBottom: TabBarHeight + bottom + 48,
              marginHorizontal: 16,
              gap: 24,
            }}
          >
            <MerchantList merhcants={merchantMock} />
          </ScrollView>
        </BlurView>
      </Animated.View>
      <Toolbar />
    </View>
  )
}
