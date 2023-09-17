import { Color } from '@/ui'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { AuthForm, AuthFormInput, PinForm } from '@/components'
import { useEffect, useState } from 'react'
import { useAuth } from '@/hooks'

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
  const [email, setEmail] = useState<string>('')
  const [isOtpSent, setIsOtpSent] = useState<boolean>(false)
  const { signWithOtp } = useAuth()

  useEffect(() => {
    if (email && !isOtpSent) {
      signWithOtp(email).then(() => {
        setIsOtpSent(true)
      })
    }
  }, [email, isOtpSent])

  const handleVerifyOtp = (token: string) => {}

  const handleBack = () => {
    setEmail('')
    setIsOtpSent(false)
  }

  const handleResend = () => {
    // TODO
  }

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
        {!isOtpSent && (
          <>
            <Hint>Please sign in or sign up below</Hint>
            <AuthForm
              onSubmit={({ email }: AuthFormInput) => {
                setEmail(email)
              }}
              onSignInWithGoogle={() => console.log('GOOGLE')}
            />
          </>
        )}
        {isOtpSent && (
          <>
            <Hint>Please enter the 6 digit code we sent to {email}</Hint>
            <PinForm
              onPinSubmit={handleVerifyOtp}
              onBack={handleBack}
              onResend={handleResend}
            />
          </>
        )}
      </SafeAreaView>
    </View>
  )
}
