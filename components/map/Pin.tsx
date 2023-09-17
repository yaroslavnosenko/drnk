import { Marker } from 'react-native-maps'
import styled from 'styled-components/native'

const Card = styled.View({
  color: 'white',
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
  onPress: () => void
  active?: boolean
}

export const Pin = ({
  longitude,
  latitude,
  text,
  active,
  onPress,
}: PinProps) => {
  return (
    <Marker
      coordinate={{ latitude, longitude }}
      onPress={onPress}
      zIndex={active ? 10000 : undefined}
    >
      <Card style={{ backgroundColor: active ? 'red' : 'black' }}>
        <Text>{text}</Text>
      </Card>
    </Marker>
  )
}
