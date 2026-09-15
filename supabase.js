import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://TON-PROJET.supabase.co";
const supabaseAnonKey = "ta_cle_anon";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
