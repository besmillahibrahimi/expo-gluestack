// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const translationMap: Record<string, Record<string, () => Promise<any>>> = {
  en: {
    common: () => import("./locales/en/common.json"),
    auth: () => import("./locales/en/auth.json"),
  },
  fa: {
    common: () => import("./locales/fa/common.json"),
    auth: () => import("./locales/fa/auth.json"),
  },
};

export async function importLocale(lang: string, ns: string) {
  return await translationMap[lang][ns]();
}
