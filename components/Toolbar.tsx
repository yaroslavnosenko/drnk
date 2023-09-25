import { BlurView } from 'expo-blur'
import { router } from 'expo-router'
import { Color } from '@/ui'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { SlidersHorizontal, Search } from 'lucide-react-native'
import { ViewStyle, StyleProp, TextInput } from 'react-native'
import { useRef } from 'react'

const Container = styled.View({
  marginTop: 4,
  marginLeft: 16,
  marginRight: 16,
})

const Bar = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
})

const SearchInput = styled.TextInput({
  fontFamily: 'Outfit_500Medium',
  fontSize: 16,
  height: 48,
  paddingLeft: 4,
  paddingRight: 4,
  flex: 1,
  color: Color.BLK,
})

const IconButton = styled.TouchableOpacity({
  padding: 12,
})

const BlurStyle: StyleProp<ViewStyle> = {
  backgroundColor: Color.WYT + 'CC',
  borderColor: Color.GRY + '1A',
  overflow: 'hidden',
  borderRadius: 16,
  borderWidth: 1,
}

export const Toolbar = () => {
  const searchRef = useRef<TextInput>(null)

  return (
    <SafeAreaView edges={{ bottom: 'off', top: 'additive' }}>
      <Container>
        <BlurView style={{ ...BlurStyle }}>
          <Bar style={{ height: 48 }}>
            <IconButton onPress={() => searchRef.current?.focus()}>
              <Search color={Color.GRY} size={24} strokeWidth={2.5} />
            </IconButton>
            <SearchInput
              selectionColor={Color.ORG}
              ref={searchRef}
              placeholder="Search..."
              returnKeyType={'search'}
              autoCorrect={false}
            />
            <IconButton onPress={() => router.push('/filter')}>
              <SlidersHorizontal
                color={Color.GRY}
                size={24}
                strokeWidth={2.5}
              />
            </IconButton>
          </Bar>
        </BlurView>
      </Container>
    </SafeAreaView>
  )
}

{
  /* <TimeButton>
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
        </TimeButton> */
}

// const TimeButton = styled.TouchableOpacity({
//   alignSelf: 'flex-start',
//   height: 40,
//   marginTop: 8,
// })

// const TimeText = styled.Text({
//   fontSize: 14,
//   fontFamily: 'Outfit_500Medium',
//   color: Color.GRY,
// })
