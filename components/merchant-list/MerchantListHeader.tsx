import { Button, Color } from '@/ui'
import { Clock } from 'lucide-react-native'
import styled from 'styled-components/native'

interface Props {
  count?: number
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
  fontFamily: 'Outfit_700Bold',
  color: Color.BLK,
})

export const MerchantListHeader = ({ count }: Props) => {
  return (
    <Container>
      <Heading>{count} Happy Hours</Heading>
      <Button
        border={Color.GRY + '1A'}
        icon={<Clock color={Color.GRY} />}
        color={Color.GRY}
        bg={Color.WYT}
        radius={1000}
        size="sm"
        style={{ paddingLeft: 8 }}
      >
        Tue, 10PM
      </Button>
    </Container>
  )
}
