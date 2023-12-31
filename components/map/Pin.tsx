import { Color } from '@/ui'
import { Marker } from 'react-native-maps'
import styled from 'styled-components/native'

const Card = styled.View({
  color: 'white',
  borderRadius: 10000,
  height: 48,
  width: 48,
  alignItems: 'center',
  justifyContent: 'center',
})

const Text = styled.Text({
  color: 'white',
  fontSize: 12,
  fontFamily: 'Outfit_600SemiBold',
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
      <Card
        style={{
          backgroundColor: active ? Color.WYT : Color.BLK,
          borderColor: Color.BLK,
          borderWidth: active ? 2 : 0,
        }}
      >
        <Text
          style={{
            color: active ? Color.BLK : Color.WYT,
            fontFamily: active ? 'Outfit_600SemiBold' : 'Outfit_500Medium',
          }}
        >
          {text}
        </Text>
      </Card>
    </Marker>
  )
}
