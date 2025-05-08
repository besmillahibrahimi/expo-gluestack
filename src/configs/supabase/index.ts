import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import { AppState, Platform } from "react-native";
import "react-native-url-polyfill/auto";

const supabaseUrl = "https://lujrcqmwmpvxymyrphbm.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1anJjcW13bXB2eHlteXJwaGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2OTkwMTIsImV4cCI6MjA2MjI3NTAxMn0.oJVLn4eEQk1WnADAzQ3UNVwPsOe47FWXCpZu4QzpGiM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: Platform.OS === "web" ? undefined : AsyncStorage,
    autoRefreshToken: true,
    persistSession: Platform.OS !== "web",
    detectSessionInUrl: false,
  },
});

AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});
