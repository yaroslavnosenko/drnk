import { Footer, Header, Map } from '@/components'
import { placesMock } from '@/mocks'
import styled from 'styled-components/native'
import { View } from 'react-native'
import DatePicker from '@react-native-community/datetimepicker'

const Container = styled.View({
  flex: 1,
  background: 'red',
  justifyContent: 'space-between',
})

export default function MapScreen() {
  return (
    <Container>
      <Map places={placesMock} />
      <View>
        <Header />
        <DatePicker minimumDate={new Date()} value={new Date()} />
      </View>
      <View>
        <Footer />
      </View>
    </Container>
  )
}
