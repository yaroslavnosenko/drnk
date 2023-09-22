import { placesMock } from '@/mocks'
import { Color } from '@/ui'
import { ScrollView, View } from 'react-native'
import { Map, MerchantList, Toolbar } from '@/components'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { merchantMock } from '@/mocks'

export default function HomeTab() {
  const { top, bottom } = useSafeAreaInsets()
  return (
    <View style={{ flex: 1 }}>
      <View style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <Map places={placesMock} />
      </View>
      <View
        style={{
          position: 'absolute',
          top: 0,
          width: '100%',
          zIndex: 999,
        }}
      >
        <Toolbar />
      </View>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{ height: 196 + top }}></View>
        <View
          style={{
            backgroundColor: Color.WYT,
            borderTopRightRadius: 24,
            borderTopLeftRadius: 24,
            paddingTop: 32,
            paddingBottom: bottom + 56 + 32,
          }}
        >
          <MerchantList merhcants={merchantMock} />
        </View>
      </ScrollView>
    </View>
  )
}
