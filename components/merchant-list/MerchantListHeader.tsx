import { Color } from '@/ui'
import { ReactNode } from 'react'
import styled from 'styled-components/native'

interface Props {
  title: string
  button?: ReactNode
}

const Container = styled.View({
  flexDirection: 'row',
  marginBottom: 24,
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 8,
})

const Heading = styled.Text({
  fontSize: 24,
  fontFamily: 'Outfit_600SemiBold',
  color: Color.BLK,
})

export const MerchantListHeader = ({ title, button }: Props) => {
  return (
    <Container>
      <Heading>{title}</Heading>
      {button}
    </Container>
  )
}
