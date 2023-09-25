import { Merchant } from '@/types'
import { Color } from '@/ui'
import { Star, MapPin, Clock } from 'lucide-react-native'
import React from 'react'
import { TouchableOpacityProps, View } from 'react-native'
import styled from 'styled-components/native'

interface MerchantListProps {
  merhcants: Merchant[] | null
  onPress: (id: string) => void
}

interface ItemProps extends TouchableOpacityProps {
  merhcant: Merchant
}

const ItemContainer = styled.TouchableOpacity({
  flexDirection: 'row',
  gap: 16,
  alignItems: 'center',
})

const Image = styled.Image({
  height: 120,
  width: 160,
  borderRadius: 12,
})

const Title = styled.Text({
  fontFamily: 'Outfit_700Bold',
  fontSize: 20,
  color: Color.BLK,
})

const Type = styled.Text({
  fontFamily: 'Outfit_400Regular',
  fontSize: 14,
  color: Color.BLK,
  opacity: 0.6,
})

const Item = ({ merhcant, ...props }: ItemProps) => {
  const { image, name, type, rating, distance, start_time, end_time, id } =
    merhcant
  return (
    <ItemContainer {...props}>
      <Image
        height={130}
        width={172}
        source={{
          uri: image,
        }}
      />
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Type>
            <MapPin strokeWidth={2.5} size={14} color={Color.BLK} /> Greenwich
            Village
          </Type>
          <Type>{distance} mi</Type>
        </View>
        <View style={{ marginVertical: 12 }}>
          <Title>{name}</Title>
          <Type>
            {type}, {rating}{' '}
            <Star strokeWidth={2.5} size={14} color={Color.BLK} />
          </Type>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Clock strokeWidth={3} size={14} color={Color.BLK + ''} />
          <Type
            style={{
              marginLeft: 4,
              fontFamily: 'Outfit_500Medium',
              opacity: 1,
            }}
          >
            {start_time} - {end_time}
          </Type>
        </View>
      </View>
    </ItemContainer>
  )
}

export const MerchantList = ({ merhcants, onPress }: MerchantListProps) => {
  return (
    <>
      {merhcants &&
        merhcants.map((merhcant) => (
          <React.Fragment key={merhcant.id}>
            <Item merhcant={merhcant} onPress={() => onPress(merhcant.id)} />
            <View
              style={{
                height: 0.5,
                backgroundColor: Color.GRY + '1A',
              }}
            />
          </React.Fragment>
        ))}
    </>
  )
}
