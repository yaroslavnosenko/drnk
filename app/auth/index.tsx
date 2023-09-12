import {
  Input,
  VStack,
  Heading,
  InputField,
  Text,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Button,
  ButtonText,
  Divider,
  ButtonIcon,
  GlobeIcon,
} from '@gluestack-ui/themed'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Auth() {
  return (
    <SafeAreaView>
      <VStack m="$4">
        <Heading size="2xl" mt="$24">
          Welcome to Drnk
        </Heading>
        <Text mb="$8">Please sign in or sign up below.</Text>
        <FormControl>
          <FormControlLabel mb="$2">
            <FormControlLabelText>Email</FormControlLabelText>
          </FormControlLabel>
          <Input size="md">
            <InputField type="text" placeholder="you@email.com" />
          </Input>
        </FormControl>
        <Button mt="$4">
          <ButtonText>Continue with Email</ButtonText>
        </Button>
        <Divider my="$4" />
        <Button action="secondary">
          <ButtonIcon size="lg" as={GlobeIcon} />
          <ButtonText ml="$2">Sign in with Google</ButtonText>
        </Button>
      </VStack>
    </SafeAreaView>
  )
}
