import { BlurView } from 'expo-blur'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

const Box = styled.View({ padding: 16, paddingBottom: 4 })

const ButtonText = styled.Text({
  color: 'white',
  textAlign: 'center',
  fontSize: 16,
  fontWeight: 'bold',
})

const Button = styled.TouchableOpacity({
  background: 'black',
  padding: 16,
  borderRadius: 10000,
})

export const Footer = () => {
  return (
    <BlurView style={{ backgroundColor: '#ffffffbb' }}>
      <SafeAreaView edges={{ top: 'off', bottom: 'additive' }}>
        <Box>
          <Button
            activeOpacity={0.4}
            onPress={() => router.push('/map/results')}
          >
            <ButtonText>18 results</ButtonText>
          </Button>
        </Box>
      </SafeAreaView>
    </BlurView>
  )
}
