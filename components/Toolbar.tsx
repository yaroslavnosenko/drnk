import { BlurView } from 'expo-blur'
import { router } from 'expo-router'
import { Color } from '@/ui'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { SlidersHorizontal, Clock } from 'lucide-react-native'
import { ViewStyle, StyleProp, View } from 'react-native'

const Container = styled.View({
  marginTop: 4,
  marginLeft: 16,
  marginRight: 16,
})

const TopView = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: 8,
})

const Search = styled.TextInput({
  fontFamily: 'Outfit_500Medium',
  fontSize: 16,
  height: 48,
  paddingLeft: 16,
  paddingRight: 16,
  flex: 1,
  color: Color.BLK,
})

const IconButton = styled.TouchableOpacity({
  padding: 12,
  background: Color.GRY,
  borderRadius: 12,
})

const BlurStyle: StyleProp<ViewStyle> = {
  backgroundColor: Color.WYT + 'CC',
  borderColor: Color.GRY + '1A',
  overflow: 'hidden',
  borderRadius: 1000,
  borderWidth: 1,
  flex: 1,
}

const TimeButton = styled.TouchableOpacity({
  alignSelf: 'flex-start',
  height: 40,
  marginTop: 8,
})

const TimeText = styled.Text({
  fontSize: 14,
  fontFamily: 'Outfit_500Medium',
  color: Color.GRY,
})

export const Toolbar = () => {
  return (
    <SafeAreaView edges={{ bottom: 'off', top: 'additive' }}>
      <Container>
        <TopView>
          <BlurView style={{ ...BlurStyle, borderRadius: 12 }}>
            <Search placeholder="Search..." />
          </BlurView>
          <IconButton onPress={() => router.push('/filter')}>
            <SlidersHorizontal color={Color.WYT} size={24} strokeWidth={2.5} />
          </IconButton>
        </TopView>
        <TimeButton>
          <BlurView style={BlurStyle}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: 38,
                gap: 8,
                paddingHorizontal: 8,
                paddingRight: 12,
              }}
            >
              <Clock color={Color.GRY} />
              <TimeText>Tue, 10PM</TimeText>
            </View>
          </BlurView>
        </TimeButton>
      </Container>
    </SafeAreaView>
  )
}
