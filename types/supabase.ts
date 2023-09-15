export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      happy_hour_products: {
        Row: {
          created_at: string
          discounted_price: number | null
          happy_hour_id: string
          id: string
          product_id: string
        }
        Insert: {
          created_at?: string
          discounted_price?: number | null
          happy_hour_id: string
          id?: string
          product_id: string
        }
        Update: {
          created_at?: string
          discounted_price?: number | null
          happy_hour_id?: string
          id?: string
          product_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "happy_hour_products_happy_hour_id_fkey"
            columns: ["happy_hour_id"]
            referencedRelation: "happy_hours"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "happy_hour_products_product_id_fkey"
            columns: ["product_id"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          }
        ]
      }
      happy_hours: {
        Row: {
          created_at: string
          day: string
          end_time: string
          id: string
          merchant_id: string
          start_time: string
        }
        Insert: {
          created_at?: string
          day: string
          end_time: string
          id?: string
          merchant_id: string
          start_time: string
        }
        Update: {
          created_at?: string
          day?: string
          end_time?: string
          id?: string
          merchant_id?: string
          start_time?: string
        }
        Relationships: [
          {
            foreignKeyName: "happy_hours_merchant_id_fkey"
            columns: ["merchant_id"]
            referencedRelation: "merchants"
            referencedColumns: ["id"]
          }
        ]
      }
      merchants: {
        Row: {
          created_at: string
          google_place_id: string
          google_place_url: string | null
          google_price_level: number | null
          google_rating: number | null
          google_user_ratings_total: number | null
          id: string
          latitude: number
          longitude: number
          name: string
          profile_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          google_place_id: string
          google_place_url?: string | null
          google_price_level?: number | null
          google_rating?: number | null
          google_user_ratings_total?: number | null
          id?: string
          latitude: number
          longitude: number
          name: string
          profile_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          google_place_id?: string
          google_place_url?: string | null
          google_price_level?: number | null
          google_rating?: number | null
          google_user_ratings_total?: number | null
          id?: string
          latitude?: number
          longitude?: number
          name?: string
          profile_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "merchants_profile_id_fkey"
            columns: ["profile_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      products: {
        Row: {
          created_at: string
          id: string
          merchant_id: string
          name: string
          price: number
        }
        Insert: {
          created_at?: string
          id?: string
          merchant_id: string
          name: string
          price: number
        }
        Update: {
          created_at?: string
          id?: string
          merchant_id?: string
          name?: string
          price?: number
        }
        Relationships: [
          {
            foreignKeyName: "products_merchant_id_fkey"
            columns: ["merchant_id"]
            referencedRelation: "merchants"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          created_at: string
          first_name: string | null
          id: string
          last_name: string | null
        }
        Insert: {
          created_at?: string
          first_name?: string | null
          id: string
          last_name?: string | null
        }
        Update: {
          created_at?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
