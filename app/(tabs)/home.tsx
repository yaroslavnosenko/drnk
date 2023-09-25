import {
  Map,
  MerchantListHeader,
  MerchantListItem,
  Toolbar,
} from '@/components'
import { useLayerLayout } from '@/hooks'
import { merchantMock, placesMock } from '@/mocks'
import { Button, Color, TabBarHeight } from '@/ui'
import { router } from 'expo-router'
import { MapIcon, ScrollText } from 'lucide-react-native'
import { useMemo } from 'react'
import {
  Animated,
  View,
  Dimensions,
  FlatList,
  StyleProp,
  ViewStyle,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

const screenH = Dimensions.get('window').height

const Separator = styled.View({
  height: 0.5,
  backgroundColor: Color.GRY + '1A',
  marginVertical: 24,
})

export default function HomeTab() {
  const { top, bottom } = useSafeAreaInsets()

  const FlatListStyle: StyleProp<ViewStyle> = useMemo(
    () => ({
      paddingTop: 24,
      paddingBottom: TabBarHeight + bottom + 24 + 64,
      paddingHorizontal: 16,
      backgroundColor: Color.WYT,
      borderTopRightRadius: 24,
      borderTopLeftRadius: 24,
    }),
    [bottom]
  )

  const positions = useMemo(
    () => ({ top: 0, middle: top + 192, bottom: screenH }),
    [top]
  )

  const {
    moveToPosition,
    onScroll,
    animation,
    panHandlers,
    layerStyle,
    layerPosition,
  } = useLayerLayout({ positions, panOffset: 72 })

  const handlePress = (id: string) => {
    router.push('/places/' + id)
  }

  return (
    <View style={{ flex: 1, backgroundColor: Color.WYT }}>
      <Map places={placesMock} />
      <Animated.View style={[layerStyle]} {...panHandlers}>
        <FlatList
          data={merchantMock}
          onScroll={onScroll}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
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
              <MerchantListHeader count={17} />
            </View>
          }
          ItemSeparatorComponent={() => <Separator />}
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
              <ScrollText color={Color.WYT} />
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
    </View>
  )
}
