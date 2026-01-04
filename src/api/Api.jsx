import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey, {
  global: { fetch: fetch.bind(globalThis) },
});

export async function getForside() {
  let { data: forside, error } = await supabase.from("forside").select("*");

  if (error) throw error;
  return forside;
}
export async function getOmOs() {
  let { data: omOs, error } = await supabase.from("omOs").select("*");

  if (error) throw error;
  return omOs;
}
export async function getYdelse() {
  let { data: ydelse, error } = await supabase.from("ydelse").select("*");

  if (error) throw error;
  return ydelse;
}
export async function getYdelseText() {
  let { data: ydelseText, error } = await supabase
    .from("ydelseText")
    .select("*");

  if (error) throw error;
  return ydelseText;
}
