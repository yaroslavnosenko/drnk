import { Merchant } from '@/types'
import { View } from 'react-native'

interface MerchantListProps {
  merhcants: Merchant[] | null
}

interface ItemProps {
  merhcant: Merchant
}

const Item = ({}: ItemProps) => {
  return <></>
}

export const MerchantList = ({}: MerchantListProps) => {
  return <View></View>
}
