import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'sb_publishable_Ydj6o1KncNQmVA2Ps6Zy6g_j2iGDXs'
const supabaseKey = 'sb_secret_IJeXE9gBa3lIjLDJQI-avQ_C-EX8_Ch'

export const supabase = createClient(supabaseUrl, supabaseKey)