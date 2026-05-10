import type { Locale, Messages } from "@/lib/i18n/types";
import { buildMessages } from "@/lib/i18n/from-resources";

export type { Locale, Messages } from "@/lib/i18n/types";

export const dictionaries: Record<Locale, Messages> = {
  en: buildMessages("en"),
  pt: buildMessages("pt"),
};
