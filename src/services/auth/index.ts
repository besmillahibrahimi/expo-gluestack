import type { SignInSchemaType } from "@/app/(auth)/signin/_FormSchema";
import { supabase } from "@/configs/supabase";

export async function signIn(data: SignInSchemaType) {
  const { email, password } = data;
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password,
    });
    return { data: data.session, error };
  } catch (error) {
    return { data: null, error: error as Error };
  }
}

export async function signUp(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    return { data: data.session, error };
  } catch (error) {
    return { data: null, error: error as Error };
  }
}

export async function signOut() {
  await supabase.auth.signOut();
}
