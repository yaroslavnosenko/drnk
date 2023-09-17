import styled from 'styled-components/native'
import { Color } from '@/ui/config'
import { useState } from 'react'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { View } from 'react-native'

interface InputProps {
  pinCount?: number
  onPinSubmit: (pin: string) => void
}

export const PinInput = ({ onPinSubmit, pinCount = 6 }: InputProps) => {
  const inputW = pinCount * 48 + (pinCount - 1) * 8
  return (
    <View style={{ alignItems: 'center' }}>
      <OTPInputView
        pinCount={6}
        style={{ width: inputW, height: 52 }}
        selectionColor={Color.ORG}
        placeholderCharacter="•"
        placeholderTextColor={Color.GRY + 'aa'}
        codeInputFieldStyle={{
          backgroundColor: 'white',
          borderWidth: 0,
          borderRadius: 10,
          width: 48,
          height: 52,
          fontSize: 16,
          fontFamily: 'Outfit_500Medium',
          color: Color.BLK,
        }}
        onCodeFilled={onPinSubmit}
      />
    </View>
  )
}
