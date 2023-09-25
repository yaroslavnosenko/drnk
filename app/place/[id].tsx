import { merchantMock } from '@/mocks'
import { Color } from '@/ui'
import { View, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export default function PlaceScreen() {
  const screenW = Dimensions.get('window').width
  const imageHeight = (screenW / 4) * 3

  const Image = styled.Image({
    height: imageHeight,
    width: screenW,
  })

  return (
    <View style={{ flex: 1, backgroundColor: Color.WYT }}>
      <View style={{ position: 'absolute' }}>
        <Image
          source={{
            uri: merchantMock[0].image,
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
            height: 1000,
            backgroundColor: Color.WYT,
            borderTopRightRadius: 24,
            borderTopLeftRadius: 24,
            marginTop: imageHeight - 24,
          }}
        ></View>
      </ScrollView>
    </View>
  )
}
