import { Color, TabBarHeight } from '@/ui'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

const Header = styled.Text({
  fontSize: 32,
  fontFamily: 'Outfit_500Medium',
})

export default function FavoritesTab() {
  return (
    <View style={{ flex: 1, backgroundColor: Color.WYT }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header style={{ marginHorizontal: 16, marginVertical: 32 }}>
          Favorites
        </Header>
        <View style={{ paddingBottom: TabBarHeight + 32 }} />
      </ScrollView>
    </View>
  )
}
