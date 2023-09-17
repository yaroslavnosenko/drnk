import { Color, Button, Input, Google } from '@/ui'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { Instagram, Mail } from 'lucide-react-native'

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
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          placeholder="you@email.com"
          label="Email"
          autoFocus
          selectionColor={Color.ORG}
          icon={<Mail color={Color.GRY} strokeWidth={2.5} />}
        />
        <Button style={{ marginTop: 16 }}>Continue with email</Button>
        <View
          style={{
            height: 0.5,
            backgroundColor: Color.BLK,
            opacity: 0.4,
            marginVertical: 16,
            marginHorizontal: 16,
          }}
        />
        <Button bg="white" color={Color.GRY} icon={<Google />}>
          Sign in with Google
        </Button>
      </SafeAreaView>
    </View>
  )
}
