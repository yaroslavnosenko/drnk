import styled, { StyledObject } from 'styled-components/native'
import React, { PropsWithChildren } from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Color } from '@/ui/config'

interface ButtonProps extends TouchableOpacityProps {
  bg?: string
  color?: string
  border?: string
  radius?: number
  size?: 'sm' | 'md'
  icon?: React.ReactNode
}

interface ViewConfig {
  base: StyledObject
  sm: StyledObject
  md: StyledObject
}

const containerStyles: ViewConfig = {
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sm: {
    height: 36,
    paddingLeft: 12,
    paddingRight: 12,
  },
  md: {
    height: 48,
    paddingLeft: 16,
    paddingRight: 16,
  },
}

const textStyles: ViewConfig = {
  base: {
    textAlign: 'center',
    fontFamily: 'Outfit_500Medium',
  },
  sm: {
    fontSize: 14,
  },
  md: {
    fontSize: 16,
  },
}

export const Button = ({
  bg = Color.BLK,
  color = Color.WYT,
  size = 'md',
  radius = 16,
  border,
  icon,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const ButtonContainer = styled.TouchableOpacity({
    ...containerStyles.base,
    ...containerStyles[size],
    background: bg,
    borderRadius: radius,
    borderWidth: border ? 0.5 : 0,
    borderColor: border,
  })

  const ButtonText = styled.Text({
    ...textStyles.base,
    ...textStyles[size],
    color: color,
    marginLeft: icon ? 8 : 0,
  })

  return (
    <ButtonContainer activeOpacity={0.4} {...props}>
      {icon}
      <ButtonText>{children}</ButtonText>
    </ButtonContainer>
  )
}
