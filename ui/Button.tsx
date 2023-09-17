import styled from 'styled-components/native'
import { Color } from '@/ui/config'
import React, { PropsWithChildren } from 'react'
import { TouchableOpacityProps } from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
  bg?: string
  color?: string
  disabledText?: string
  icon?: React.ReactNode
}

const ButtonContainer = styled.TouchableOpacity({
  borderRadius: 10,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  height: 48,
})

const ButtonText = styled.Text({
  textAlign: 'center',
  fontSize: 18,
  fontFamily: 'Outfit_500Medium',
  marginLeft: 8,
  marginRight: 8,
})

export const Button = ({
  bg,
  color,
  icon,
  children,
  disabledText,
  style,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const { disabled } = props
  return (
    <ButtonContainer
      style={{ backgroundColor: bg || Color.GRY, ...(style as object) }}
      {...props}
    >
      {icon}
      <ButtonText style={{ color: color || Color.WYT }}>
        {disabled && disabledText ? disabledText : children}
      </ButtonText>
    </ButtonContainer>
  )
}
