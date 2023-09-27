import { Button, Color } from '@/ui'
import { opacity } from '@/utils'
import { Clock } from 'lucide-react-native'
import styled from 'styled-components/native'

interface Props {
  title: string
  shouldShowTimeButton?: boolean
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

export const MerchantListHeader = ({ title, shouldShowTimeButton }: Props) => {
  return (
    <Container>
      <Heading>{title}</Heading>
      {shouldShowTimeButton && (
        <Button
          border={opacity(Color.BLK, 0.2)}
          icon={<Clock color={Color.BLK} />}
          color={Color.BLK}
          bg={Color.WYT}
          radius={1000}
          size="sm"
          style={{ paddingLeft: 8 }}
        >
          Tue, 10PM
        </Button>
      )}
    </Container>
  )
}
