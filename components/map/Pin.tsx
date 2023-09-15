import { Marker } from 'react-native-maps'
import styled from 'styled-components/native'

const Card = styled.View({
  color: 'white',
  background: 'black',
  padding: 8,
  borderRadius: 8,
})

const Text = styled.Text({
  color: 'white',
  fontSize: 10,
  fontWeight: 'bold',
})

interface PinProps {
  latitude: number
  longitude: number
  text: string
}

export const Pin = ({ longitude, latitude, text }: PinProps) => {
  return (
    <Marker coordinate={{ latitude, longitude }}>
      <Card>
        <Text>{text}</Text>
      </Card>
    </Marker>
  )
}
