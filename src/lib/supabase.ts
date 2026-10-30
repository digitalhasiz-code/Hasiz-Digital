import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://vtvyedjsggeazppendmg.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_I1w-RQWoMYB7_llzqZ_Gcg_Rj6GxP1S";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

