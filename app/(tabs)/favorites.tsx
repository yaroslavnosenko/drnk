import { MerchantList } from '@/components'
import { merchantMock } from '@/mocks'
import { Color, TabBarHeight } from '@/ui'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

const Header = styled.Text({
  fontSize: 32,
  fontFamily: 'Outfit_500Medium',
})

export default function FavoritesTab() {
  return (
    <View style={{ flex: 1, backgroundColor: Color.WYT }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <Header style={{ marginHorizontal: 16, marginVertical: 32 }}>
            Favorites
          </Header>
          <MerchantList merhcants={merchantMock} />
          <View style={{ paddingBottom: TabBarHeight + 32 }} />
        </SafeAreaView>
      </ScrollView>
    </View>
  )
}
