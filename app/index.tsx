import * as Location from 'expo-location'
import { useRootNavigationState } from 'expo-router'
import { View, Switch } from 'react-native'
import { useEffect } from 'react'
import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Color, Divider, Logo } from '@/ui'

const Title = styled.Text({
  fontFamily: 'Outfit_500Medium',
  fontSize: 32,
})

const Text = styled.Text({
  fontFamily: 'Outfit_400Regular',
  fontSize: 18,
})

const TermsScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 24, backgroundColor: Color.WYT }}
    >
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={{
            width: 128,
            height: 128,
            alignSelf: 'center',
          }}
        >
          <Logo />
        </View>
        <Title style={{ textAlign: 'center' }}>
          Terms and {'\n'}Conditions
        </Title>
        <View style={{ alignItems: 'center' }}>
          <Divider style={{ width: 128 }} />
        </View>
        <Text style={{ opacity: 0.6 }}>
          Our Terms and Conditions and privacy Policy to contiune using our app,
          please read and agree to our terms and conditions
        </Text>
        <View style={{ marginVertical: 36 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 24,
            }}
          >
            <Text>I have read and agree to the terms</Text>
            <Switch></Switch>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text>I am over the age of 21</Text>
            <Switch></Switch>
          </View>
        </View>
      </View>
      <Button style={{ marginBottom: 16 }}>Continue</Button>
    </SafeAreaView>
  )
}

export default function InitScreen() {
  useEffect(() => {
    const locationRequest = async () => {
      await Location.requestForegroundPermissionsAsync()
    }
    locationRequest()
  }, [])

  const rootNavigationState = useRootNavigationState()
  if (!rootNavigationState?.key) return null
  return <TermsScreen />
}
