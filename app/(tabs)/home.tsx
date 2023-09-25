import { Map, MerchantListItem, Toolbar } from '@/components'
import { useLayerLayout } from '@/hooks'
import { merchantMock, placesMock } from '@/mocks'
import { Color, TabBarHeight } from '@/ui'
import { BlurView } from 'expo-blur'
import { router } from 'expo-router'
import { Animated, View, Dimensions, FlatList } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const screenH = Dimensions.get('window').height

export default function HomeTab() {
  const { top, bottom } = useSafeAreaInsets()

  const { panHandlers, onScroll, layerStyle, paddingTop } = useLayerLayout({
    positions: { top: 0, middle: top + 192, bottom: screenH },
    offset: 64,
    paddingTop: top + 72,
  })

  const handlePress = (id: string) => {
    router.push('/places/' + id)
  }

  return (
    <View style={{ flex: 1 }}>
      <Map places={placesMock} />
      <Animated.View style={[layerStyle]} {...panHandlers}>
        <View
          style={{
            backgroundColor: Color.WYT,
            borderTopRightRadius: 24,
            borderTopLeftRadius: 24,
          }}
        >
          <FlatList
            onScroll={onScroll}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <View>
                <Animated.View style={{ height: paddingTop }} />
              </View>
            }
            contentContainerStyle={{
              marginHorizontal: 16,
              paddingTop: 24,
              paddingBottom: TabBarHeight + bottom + 24,
            }}
            data={merchantMock}
            renderItem={({ item, index }) => (
              <View>
                <MerchantListItem
                  merhcant={item}
                  onPress={() => handlePress(item.id)}
                />
                {index !== merchantMock.length - 1 && (
                  <View
                    style={{
                      marginVertical: 24,
                      backgroundColor: Color.GRY + '1A',
                      height: 0.5,
                    }}
                  />
                )}
              </View>
            )}
          />
        </View>
      </Animated.View>
      <Toolbar />
    </View>
  )
}
