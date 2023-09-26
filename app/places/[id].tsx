import { merchantMock } from '@/mocks'
import { Button, Color } from '@/ui'
import { BlurView } from 'expo-blur'
import { Heart, MapPin, Star } from 'lucide-react-native'
import { View, Dimensions, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

const Header = styled.Text({
  fontSize: 24,
  fontFamily: 'Outfit_500Medium',
})

const MutedText = styled.Text({
  fontFamily: 'Outfit_400Regular',
  fontSize: 14,
  color: Color.BLK,
  opacity: 0.6,
})

const ListHeading = styled.Text({
  fontFamily: 'Outfit_600SemiBold',
  fontSize: 20,
  color: Color.BLK,
  marginBottom: 16,
})

export default function PlacesScreen() {
  const screenW = Dimensions.get('window').width
  const imageHeight = (screenW / 4) * 3
  const { bottom } = useSafeAreaInsets()

  const Image = styled.Image({
    height: imageHeight,
    width: screenW,
  })

  const merchant = merchantMock[0]

  return (
    <View style={{ flex: 1, backgroundColor: Color.WYT }}>
      <View style={{ position: 'absolute' }}>
        <Image
          source={{
            uri: merchant.image,
          }}
        />
        <View
          style={{
            position: 'absolute',
            height: 48,
            backgroundColor: Color.WYT,
            borderTopRightRadius: 24,
            borderTopLeftRadius: 24,
            width: '100%',
            bottom: -24,
          }}
        ></View>
      </View>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: Color.WYT,
            borderTopRightRadius: 24,
            borderTopLeftRadius: 24,
            marginTop: imageHeight - 24,
            paddingHorizontal: 16,
            paddingTop: 24,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Header>Analogue</Header>
            <TouchableOpacity style={{ padding: 12 }}>
              <Heart color={Color.GRY} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 16,
            }}
          >
            <MutedText>
              {merchant.type}, {merchant.rating}{' '}
              <Star strokeWidth={2.5} size={14} color={Color.BLK} />
            </MutedText>
            <MutedText>
              <MapPin strokeWidth={2.5} size={14} color={Color.BLK} />{' '}
              {merchant.region}
            </MutedText>
            <MutedText>{merchant.distance} mi</MutedText>
          </View>
          <MutedText style={{ fontSize: 16, opacity: 1 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </MutedText>
          <View
            style={{
              height: 0.5,
              backgroundColor: Color.GRY + '1A',
              marginVertical: 24,
            }}
          />
          <ListHeading>Happy Hour</ListHeading>
          {Array.from(Array(7).keys()).map((key) => {
            return (
              <View
                key={key}
                style={{ flexDirection: 'row', marginVertical: 4 }}
              >
                <MutedText style={{ fontSize: 16, width: 120 }}>Mon</MutedText>
                <MutedText
                  style={{
                    fontSize: 16,
                    opacity: 1,
                    fontFamily: 'Outfit_500Medium',
                  }}
                >
                  4 PM - 7 PM
                </MutedText>
              </View>
            )
          })}
        </View>
      </ScrollView>
      <BlurView
        style={{
          position: 'absolute',
          bottom: 0,
          height: 64 + bottom,
          width: '100%',
          paddingBottom: bottom,
          paddingHorizontal: 16,
          justifyContent: 'flex-end',
          borderTopWidth: 0.5,
          borderTopColor: Color.GRY + '1A',
        }}
      >
        <Button radius={16}>Get Directions</Button>
      </BlurView>
    </View>
  )
}
