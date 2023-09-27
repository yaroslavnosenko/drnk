import styled from 'styled-components/native'
import { Color } from '@/ui/config'
import { opacity } from '@/utils'

export const Divider = styled.View({
  height: 0.5,
  backgroundColor: opacity(Color.BLK, 0.2),
  marginVertical: 24,
})
