import { Color } from '@/ui'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { AuthForm } from '@/components'

const Heading = styled.Text({
  fontSize: 32,
  fontFamily: 'Outfit_500Medium',
  textAlign: 'center',
  color: Color.BLK,
})

const Logo = styled.Text({
  fontSize: 32,
  fontFamily: 'Outfit_700Bold',
  color: Color.BLK,
})

const Hint = styled.Text({
  fontSize: 16,
  textAlign: 'center',
  opacity: 0.7,
  color: Color.BLK,
  fontFamily: 'Outfit_400Regular',
  marginBottom: 48,
  marginTop: 4,
})

export default function Auth() {
  return (
    <View
      style={{
        backgroundColor: Color.WYT,
        flex: 1,
        paddingTop: 128,
        paddingHorizontal: 24,
      }}
    >
      <SafeAreaView>
        <Heading>
          Welcome to <Logo>Drnk</Logo>
        </Heading>
        <Hint>Please sign in or sign up below</Hint>
        <AuthForm
          onSubmit={console.log}
          onSignInWithGoogle={() => console.log('GOOGLE')}
        />
      </SafeAreaView>
    </View>
  )
}
