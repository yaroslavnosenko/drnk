import { supabase } from '@/lib'

export const useAuth = () => {
  const signWithOtp = (email: string) => {
    return supabase.auth.signInWithOtp({ email })
  }

  const verifyOtp = (email: string, token: string) => {
    return supabase.auth.verifyOtp({ email, token, type: 'email' })
  }

  return { signWithOtp, verifyOtp }
}
