import "@/configs/i18n";
import Providers from "@/providers";
import "@/styles/global.css";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "react-native-reanimated";
import "react-native-url-polyfill/auto";

export default function RootLayout() {
  const [loaded] = useFonts({
    VazirmatnBlack: require("../assets/fonts/Vazirmatn-Black.ttf"),
    VazirmatnBold: require("../assets/fonts/Vazirmatn-Bold.ttf"),
    VazirmatnExtraBold: require("../assets/fonts/Vazirmatn-ExtraBold.ttf"),
    VazirmatnExtraLight: require("../assets/fonts/Vazirmatn-ExtraLight.ttf"),
    VazirmatnLight: require("../assets/fonts/Vazirmatn-Light.ttf"),
    VazirmatnMedium: require("../assets/fonts/Vazirmatn-Medium.ttf"),
    VazirmatnRegular: require("../assets/fonts/Vazirmatn-Regular.ttf"),
    VazirmatnSemiBold: require("../assets/fonts/Vazirmatn-SemiBold.ttf"),
    VazirmatnThin: require("../assets/fonts/Vazirmatn-Thin.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Providers>
      <Stack />
    </Providers>
  );
}
