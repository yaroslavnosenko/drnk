import { MerchantListHeader, MerchantListItem } from '@/components'
import { merchantMock } from '@/mocks'
import { Color, Divider, TabBarHeight } from '@/ui'
import { opacity } from '@/utils'
import { router } from 'expo-router'
import { useMemo } from 'react'
import { FlatList, StyleProp, View, ViewStyle } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export default function FavoritesTab() {
  const { top, bottom } = useSafeAreaInsets()

  const handlePress = (id: string) => {
    router.push('/places/' + id)
  }

  const FlatListStyle: StyleProp<ViewStyle> = useMemo(
    () => ({
      paddingTop: top + 24,
      paddingBottom: TabBarHeight + bottom + 24,
      paddingHorizontal: 16,
    }),
    [bottom]
  )
  return (
    <View style={{ flex: 1, backgroundColor: Color.WYT }}>
      <FlatList
        data={merchantMock}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={FlatListStyle}
        ListHeaderComponent={<MerchantListHeader title="Favorites" />}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({ item }) => (
          <MerchantListItem
            merhcant={item}
            onPress={() => handlePress(item.id)}
          />
        )}
      />
    </View>
  )
}
