import { useTranslation } from "react-i18next";
import { Locales } from "../configs/i18n/consts";
import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from "./ui/select";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Select defaultValue={i18n.language} onValueChange={handleLanguageChange}>
      <SelectTrigger>
        <SelectInput />
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          {Locales.map((locale) => (
            <SelectItem
              key={locale}
              value={locale}
              label={locale.toUpperCase()}
            >
              {locale.toUpperCase()}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectPortal>
    </Select>
  );
}
