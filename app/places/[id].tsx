import { MerchantInfo } from '@/components'
import { merchantMock } from '@/mocks'
import { Button, Color } from '@/ui'
import { opacity } from '@/utils'
import { BlurView } from 'expo-blur'
import { ChevronLeft, Heart } from 'lucide-react-native'
import { View, Dimensions, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export default function PlacesScreen() {
  const screenW = Dimensions.get('window').width
  const imageHeight = (screenW / 4) * 3
  const { bottom, top } = useSafeAreaInsets()

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
            paddingHorizontal: 24,
            paddingTop: 24,
            paddingBottom: 72 + bottom + 24,
          }}
        >
          <MerchantInfo />
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          top: top + 8,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 24,
        }}
      >
        <TouchableOpacity>
          <BlurView
            style={{
              padding: 6,
              backgroundColor: opacity(Color.WYT, 0.8),
              borderRadius: 1000,
              overflow: 'hidden',
            }}
          >
            <ChevronLeft strokeWidth={2.5} color={Color.BLK} />
          </BlurView>
        </TouchableOpacity>
        <TouchableOpacity>
          <BlurView
            style={{
              padding: 6,
              backgroundColor: opacity(Color.WYT, 0.8),
              borderRadius: 1000,
              overflow: 'hidden',
            }}
          >
            <Heart strokeWidth={2.5} color={Color.BLK} />
          </BlurView>
        </TouchableOpacity>
      </View>
      <BlurView
        style={{
          position: 'absolute',
          bottom: 0,
          height: 72 + bottom,
          width: '100%',
          paddingBottom: bottom,
          paddingHorizontal: 24,
          justifyContent: 'flex-end',
          borderTopWidth: 0.5,
          borderTopColor: opacity(Color.BLK, 0.2),
        }}
      >
        <Button radius={1200} style={{ height: 56 }}>
          Get Directions
        </Button>
      </BlurView>
    </View>
  )
}
