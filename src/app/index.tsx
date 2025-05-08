import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Text } from "@/components/ui/text";
import { useTranslation } from "react-i18next";
import { View } from "react-native";

export default function Index() {
  const { t } = useTranslation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{t("appName")}</Text>
      <LanguageSwitcher />
    </View>
  );
}
