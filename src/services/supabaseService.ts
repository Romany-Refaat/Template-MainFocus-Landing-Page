// supabaseService.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL!
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

export async function saveEmailSubscriber(email: string): Promise<SaveEmailResult> {
  if (!email) {
    return {
      error: 'Email is required',
      isExistingSubscriber: false
    }
  }

  try {
    // First check if email exists
    const { data: existingUser, error: checkError } = await supabase
      .from('email_subscribers')
      .select('*')
      .eq('email', email.toLowerCase().trim())
      .maybeSingle()

    if (checkError) {
      console.error('Check error:', checkError)
      return {
        error: 'Error checking email',
        isExistingSubscriber: false
      }
    }

    if (existingUser) {
      return {
        isExistingSubscriber: true
      }
    }

    // Insert new email
    const { data, error: insertError } = await supabase
      .from('email_subscribers')
      .insert([
        {
          email: email.toLowerCase().trim()
        }
      ])
      .select()

    if (insertError) {
      console.error('Insert error:', insertError)
      return {
        error: insertError.message,
        isExistingSubscriber: false
      }
    }

    console.log('Insertion successful:', data)
    return {
      isExistingSubscriber: false
    }
  } catch (error) {
    console.error('Unexpected error:', error)
    return {
      error: 'Unexpected error occurred',
      isExistingSubscriber: false
    }
  }
}