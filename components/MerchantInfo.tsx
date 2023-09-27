import { merchantMock } from '@/mocks'
import { Color, Divider } from '@/ui'
import { opacity } from '@/utils'
import { Share, MapPin, Star, Phone, Globe } from 'lucide-react-native'
import { TouchableOpacity, View } from 'react-native'
import MapView from 'react-native-maps'
import styled from 'styled-components/native'

const ManhattanRegion = {
  latitude: 40.754932,
  longitude: -73.984016,
  latitudeDelta: 0.005,
  longitudeDelta: 0.005,
}

const Stack = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: 12,
})

const Header = styled.Text({
  fontSize: 24,
  fontFamily: 'Outfit_600SemiBold',
  marginBottom: 4,
})

const MutedText = styled.Text({
  fontFamily: 'Outfit_400Regular',
  fontSize: 14,
  color: Color.BLK,
  opacity: 0.6,
})

const ListHeading = styled.Text({
  fontFamily: 'Outfit_600SemiBold',
  fontSize: 18,
  color: Color.BLK,
  marginBottom: 16,
})

export const MerchantInfo = () => {
  const merchant = merchantMock[0]

  return (
    <View style={{ flex: 1 }}>
      <Stack>
        <View style={{ flex: 1 }}>
          <Header>{merchant.name}</Header>
          <MutedText>
            {merchant.type}, {merchant.rating}{' '}
            <Star strokeWidth={2.5} size={14} color={Color.BLK} />
          </MutedText>
        </View>
        <TouchableOpacity style={{ padding: 6 }}>
          <Share strokeWidth={2.5} color={Color.BLK} />
        </TouchableOpacity>
      </Stack>
      <Stack style={{ marginTop: 24 }}>
        <MutedText>
          <MapPin strokeWidth={2.5} size={14} color={Color.BLK} />{' '}
          {merchant.region}
        </MutedText>
        <MutedText>{merchant.distance} mi</MutedText>
      </Stack>
      <MutedText style={{ fontSize: 16, opacity: 1, marginTop: 24 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </MutedText>
      <Divider />
      <ListHeading>Happy Hour</ListHeading>
      {Array.from(Array(2).keys()).map((key) => {
        return (
          <View
            key={key}
            style={{
              flexDirection: 'row',
              marginTop: 8,
              justifyContent: 'space-between',
            }}
          >
            <MutedText style={{ fontSize: 16 }}>Monday - Friday</MutedText>
            <MutedText
              style={{
                opacity: 1,
                fontFamily: 'Outfit_600SemiBold',
                fontSize: 16,
              }}
            >
              4 PM - 7 PM
            </MutedText>
          </View>
        )
      })}
      <View style={{ marginTop: 16 }}>
        {Array.from(Array(2).keys()).map((key) => {
          return (
            <View
              key={key}
              style={{
                flexDirection: 'row',
                marginTop: 8,
                justifyContent: 'space-between',
              }}
            >
              <MutedText style={{ fontSize: 16 }}>Sweat Potato</MutedText>
              <MutedText
                style={{
                  opacity: 1,
                  fontFamily: 'Outfit_600SemiBold',
                  fontSize: 16,
                }}
              >
                $10
              </MutedText>
            </View>
          )
        })}
      </View>
      <View
        style={{
          height: 260,
          marginHorizontal: -24,
          marginTop: 32,
          marginBottom: 16,
        }}
      >
        <MapView
          showsCompass={false}
          showsPointsOfInterest={false}
          showsUserLocation={true}
          pitchEnabled={false}
          style={{ flex: 1 }}
          initialRegion={ManhattanRegion}
          loadingEnabled={true}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        />
      </View>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 64,
          opacity: 0.6,
          gap: 12,
        }}
      >
        <MapPin color={Color.BLK} />
        <MutedText style={{ fontSize: 16, opacity: 1 }}>
          11 East 13th Street, New York, NY 10003
        </MutedText>
      </TouchableOpacity>
      <Divider style={{ marginVertical: 0 }} />
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 64,
          opacity: 0.6,
          gap: 12,
        }}
      >
        <Phone color={Color.BLK} />
        <MutedText style={{ fontSize: 16, opacity: 1 }}>
          (514) 000 1111
        </MutedText>
      </TouchableOpacity>
      <Divider style={{ marginVertical: 0 }} />
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 64,
          opacity: 0.6,
          gap: 12,
        }}
      >
        <Globe color={Color.BLK} />
        <MutedText style={{ fontSize: 16, opacity: 1 }}>
          www.analogue.com
        </MutedText>
      </TouchableOpacity>
    </View>
  )
}
