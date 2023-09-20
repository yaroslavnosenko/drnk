import { Database } from '@/types/supabase'

export interface Place {
  id: string
  longitude: number
  latitude: number
  hhFinish: string
}

export type Merchant = Database['public']['Tables']['merchants']['Row']
