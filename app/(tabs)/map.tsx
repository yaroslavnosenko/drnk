import { Map } from '@/components'
import { placesMock } from '@/mocks'
import { View } from 'react-native'

export default function MapTab() {
  return (
    <View style={{ flex: 1 }}>
      <Map places={placesMock} />
    </View>
  )
}
