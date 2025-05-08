import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { DefaultLocale, Locales } from "./consts";
import { importLocale } from "./utils";

const customBackend = {
  type: "backend" as const,
  read: async (
    language: string,
    namespace: string,
    callback: (err: unknown, data: unknown) => void,
  ) => {
    try {
      const data = await importLocale(language, namespace);
      callback(null, data.default ?? data);
    } catch (err) {
      callback(err, false);
    }
  },
};

i18n
  .use(customBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: DefaultLocale,
    supportedLngs: Locales,
    ns: [], // don't preload
    defaultNS: "common",
    interpolation: { escapeValue: false },
    react: { useSuspense: true }, // required for true lazy loading
  });

export default i18n;
