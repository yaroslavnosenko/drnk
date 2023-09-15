import { Footer, Header, Map } from '@/components'
import { placesMock } from '@/mocks'
import styled from 'styled-components/native'
import { View } from 'react-native'

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
      </View>
      <View>
        <Footer />
      </View>
    </Container>
  )
}
