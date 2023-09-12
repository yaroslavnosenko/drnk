import { VStack } from '@gluestack-ui/themed'
import { Footer, Header, Map, TimeFilter } from '../../components'
import { placesMock } from '../../mocks'

export default function MapScreen() {
  return (
    <VStack
      width="100%"
      height="100%"
      bg="white"
      justifyContent="space-between"
    >
      <Map places={placesMock} />
      <VStack>
        <Header />
        <TimeFilter />
      </VStack>
      <VStack>
        <Footer />
      </VStack>
    </VStack>
  )
}
