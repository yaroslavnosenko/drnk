import {
  Map,
  MerchantListHeader,
  MerchantListItem,
  TimePickerModal,
  Toolbar,
} from '@/components'
import { useLayerLayout } from '@/hooks'
import { merchantMock, placesMock } from '@/mocks'
import { Button, Color, Divider, TabBarHeight } from '@/ui'
import { opacity } from '@/utils'
import { router } from 'expo-router'
import { Clock, List, MapIcon } from 'lucide-react-native'
import { useMemo, useState } from 'react'
import {
  Animated,
  View,
  Dimensions,
  FlatList,
  StyleProp,
  ViewStyle,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const screenH = Dimensions.get('window').height

export default function HomeTab() {
  const { top, bottom } = useSafeAreaInsets()

  const FlatListStyle: StyleProp<ViewStyle> = useMemo(
    () => ({
      paddingTop: 24,
      paddingBottom: TabBarHeight + bottom + 24 + 64,
      paddingHorizontal: 16,
    }),
    [bottom]
  )

  const positions = useMemo(
    () => ({ top: 0, middle: top + 256, bottom: screenH }),
    [top]
  )

  const {
    moveToPosition,
    onScroll,
    animation,
    panHandlers,
    layerStyle,
    layerPosition,
  } = useLayerLayout({ positions, panOffset: 160 })

  const [isTimePickerVisible, setIsTimePickerVisible] = useState<boolean>(false)

  const handlePress = (id: string) => {
    router.push('/places/' + id)
  }

  return (
    <View style={{ flex: 1, backgroundColor: Color.WYT }}>
      <Map
        places={placesMock}
        onTouchStart={() => moveToPosition(positions.bottom)}
      />
      <Animated.View style={[layerStyle]} {...panHandlers}>
        <FlatList
          data={merchantMock}
          onScroll={onScroll}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          style={{
            backgroundColor: Color.WYT,
            borderTopRightRadius: 24,
            borderTopLeftRadius: 24,
          }}
          contentContainerStyle={FlatListStyle}
          scrollEnabled={layerPosition === positions.top}
          ListHeaderComponent={
            <View>
              <Animated.View
                style={{
                  height: animation.interpolate({
                    inputRange: [0, positions.middle],
                    outputRange: [top + 64, 0],
                  }),
                }}
              />
              <MerchantListHeader
                title={'17 Results'}
                button={
                  <Button
                    border={opacity(Color.BLK, 0.2)}
                    icon={<Clock color={Color.BLK} />}
                    color={Color.BLK}
                    bg={Color.WYT}
                    radius={1000}
                    size="sm"
                    style={{ paddingLeft: 8 }}
                    onPress={() => setIsTimePickerVisible(true)}
                  >
                    Tue, 10PM
                  </Button>
                }
              />
            </View>
          }
          ItemSeparatorComponent={() => <Divider />}
          renderItem={({ item }) => (
            <MerchantListItem
              merhcant={item}
              onPress={() => handlePress(item.id)}
            />
          )}
        />
      </Animated.View>
      <Toolbar />
      <View
        style={{
          position: 'absolute',
          bottom: bottom + TabBarHeight + 16,
          alignSelf: 'center',
        }}
      >
        <Button
          icon={
            layerPosition === positions.bottom ? (
              <List color={Color.WYT} />
            ) : (
              <MapIcon color={Color.WYT} />
            )
          }
          radius={100}
          onPress={() =>
            moveToPosition(
              layerPosition === positions.bottom
                ? positions.top
                : positions.bottom
            )
          }
        >
          {layerPosition === positions.bottom ? 'List' : 'Map'}
        </Button>
      </View>
      <TimePickerModal
        visible={isTimePickerVisible}
        onClose={() => setIsTimePickerVisible(false)}
      />
    </View>
  )
}
